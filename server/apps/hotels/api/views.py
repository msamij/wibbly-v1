import json

from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.hotelbookingdates.models import HotelBookingDate
from server.apps.hotelbookings.models import HotelBooking
from server.apps.userhotelbookings.models import UserHotelBooking
from server.apps.users.models import User
from server.utils.construct_dates import construct_dates

from ..models import Hotel, HotelAddress
from .serializers import HotelAddressSerializer, HotelSerializer


@api_view(['GET'])
def hotels(request):
    hotels = Hotel.objects.all()[:4]
    hotels_serializer = HotelSerializer(hotels, many=True)
    return JsonResponse(hotels_serializer.data, safe=False)


@api_view(['GET'])
def hotel(request, hotel):
    hotel = Hotel.objects.filter(name=hotel)
    hotel_address = HotelAddress.objects.filter(hotel_id=hotel[0].id)
    hotel_seriazlizer = HotelSerializer(hotel, many=True)
    hotel_address_serializer = HotelAddressSerializer(hotel_address, many=True)
    return JsonResponse({'hotel': hotel_seriazlizer.data, 'hotel_address': hotel_address_serializer.data}, safe=False)


@api_view(['GET'])
def booking_dates(request, hotel):
    month = request.GET.get('month')
    year = request.GET.get('year')
    hotel = Hotel.objects.filter(name=hotel)
    hotel_booking_dates = HotelBookingDate.objects.filter(
        check_in_date__month=month)

    if not hotel_booking_dates:
        dates = construct_dates(int(month), int(year))
    else:
        response = ''
    return JsonResponse({'bookingDates': dates}, status=200, safe=False)


@api_view(['POST'])
def reserve_booking(request, hotel):
    parsed_json = json.load(request)
    # hotel = Hotel.objects.filter(name=hotel)
    # if HotelBookingDate.objects.filter(check_in_date=parsed_json['checkInDate'], check_out_date=parsed_json['checkOutDate']).exists():
    #     hotel_booking_date = HotelBookingDate.objects.filter(
    #         check_in_date=parsed_json['checkInDate'], check_out_date=parsed_json['checkOutDate'])
    #     hotel_booking = HotelBooking.objects.filter(
    #         hotel_id=hotel[0].id, hotel_booking_date_id=hotel_booking_date[0].id)[0]
    #     hotel_booking.available_rooms -= parsed_json['selectedNoOfRooms']
    #     hotel_booking.save()
    #     user_id = User.objects.filter(
    #         google_auth_id=parsed_json['userId'])[0].id
    #     UserHotelBooking(user_id=user_id, hotel_booking=hotel_booking).save()
    # else:
    #     hotel_booking_date = HotelBookingDate(
    #         checkInDate=parsed_json['checkInDate'], checkOutDate=['checkOutDate'])
    #     hotel_booking_date.save()
    #     available_rooms = hotel[0].no_of_rooms - \
    #         parsed_json['selectedNoOfRooms']
    #     hotel_booking = HotelBooking(
    #         hotel=hotel[0], hotel_booking_date=hotel_booking_date, available_rooms=available_rooms)
    #     hotel_booking.save()

    #     user_id = User.objects.filter(
    #         google_auth_id=parsed_json['userId'])[0].id
    #     UserHotelBooking(user_id=user_id, hotel_booking=hotel_booking).save()
    return JsonResponse('Booking saved successfully', status=201, safe=False)
