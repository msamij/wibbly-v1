from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.hotelbookingdates.models import HotelBookingDate
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
