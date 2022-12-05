from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.hotelbookingdates.models import HotelBookingDate
from server.apps.hotelbookings.models import HotelBooking
from server.apps.userhotelbookings.models import UserHotelBooking
from server.apps.users.models import User
from server.utils.construct_dates import construct_booking_dates
from server.utils.generic_view import *

from ..models import Hotel, HotelAddress
from .serializers import HotelAddressSerializer, HotelSerializer


@api_view(['GET'])
def hotels(request):
    return JsonResponse(return_product(Hotel, HotelSerializer), safe=False)


@api_view(['GET'])
def hotel(request, hotel):
    hotel_instance = return_hotel_instance(Hotel, hotel)
    hotel_instance_seriazlizer = HotelSerializer(hotel_instance, many=True)

    hotel_address_instance = HotelAddress.objects.filter(
        hotel_id=hotel_instance[0].id)

    hotel_address_serializer = HotelAddressSerializer(
        hotel_address_instance, many=True)

    return JsonResponse({'hotel': hotel_instance_seriazlizer.data, 'hotel_address': hotel_address_serializer.data}, safe=False)


@api_view(['GET'])
def booking_dates(request, hotel):
    year = return_request_year(request)
    month = return_request_month(request)

    hotel_booking_dates_for_requested_month = HotelBookingDate.objects.filter(
        check_in_date__month=month)

    # We have no bookings for specified month, we'll just return entire month dates.
    if not hotel_booking_dates_for_requested_month:
        booking_dates = construct_booking_dates(int(month), int(year))
    # Else case when we have some bookings for specified month, In that case we must do calculations to return dates when are available

    return JsonResponse({'bookingDates': booking_dates}, status=200, safe=False)


@api_view(['POST'])
def reserve_booking(request, hotel):
    parsed_json = return_json_parsed_request(request)
    hotel_instance = return_hotel_instance(Hotel, hotel)
    user_id = return_user_instance(User, parsed_json['userId'])[0].id

    if HotelBookingDate.objects.filter(check_in_date=parsed_json['checkInDate'], check_out_date=parsed_json['checkOutDate']).exists():
        hotel_booking_date = HotelBookingDate.objects.filter(
            check_in_date=parsed_json['checkInDate'], check_out_date=parsed_json['checkOutDate'])

        hotel_booking = HotelBooking.objects.filter(
            hotel_id=hotel_instance[0].id, hotel_booking_date_id=hotel_booking_date[0].id)[0]

        hotel_booking.available_rooms -= parsed_json['noOfRooms']

        hotel_booking.save()

        UserHotelBooking(
            user_id=user_id, hotel_booking=hotel_booking, rooms_booked=1).save()
    else:
        hotel_booking_date = HotelBookingDate(
            check_in_date=parsed_json['checkInDate'], check_out_date=parsed_json['checkOutDate'])
        hotel_booking_date.save()

        available_rooms = hotel_instance[0].no_of_rooms - \
            parsed_json['noOfRooms']
        print(available_rooms)
        hotel_booking = HotelBooking(
            hotel=hotel_instance[0], hotel_booking_date=hotel_booking_date, available_rooms=available_rooms)
        hotel_booking.save()

        UserHotelBooking(user_id=user_id, hotel_booking=hotel_booking,
                         rooms_booked=parsed_json['noOfRooms'],
                         booking_amount=hotel_instance[0].price_per_night).save()
    return JsonResponse('Booking saved successfully', status=201, safe=False)
