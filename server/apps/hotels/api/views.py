from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from server.apps.hotels.api.serializers import (HotelAddressSerializer,
                                                HotelSerializer)
from server.apps.hotels.models import Hotel, HotelAddress


@require_http_methods(['GET'])
def hotels(request):
    hotels = Hotel.objects.all()[:4]
    hotels_serializer = HotelSerializer(hotels, many=True)
    return JsonResponse(hotels_serializer.data, safe=False)


@require_http_methods(['GET'])
def hotel(request, hotel):
    hotel = Hotel.objects.filter(name=hotel)
    hotel_address = HotelAddress.objects.filter(hotel_id=hotel[0].id)
    hotel_seriazlizer = HotelSerializer(hotel, many=True)
    hotel_address_serializer = HotelAddressSerializer(hotel_address, many=True)
    return JsonResponse({'hotel': hotel_seriazlizer.data, 'hotel_address': hotel_address_serializer.data}, safe=False)
