from dataclasses import field

from rest_framework import serializers

from ..models import Hotel, HotelAddress


class HotelSerializer(serializers.ModelSerializer):
    hotel_images = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='hotel_image_url'
    )

    class Meta:
        model = Hotel
        fields = ['id', 'name', 'no_of_rooms',
                  'price_per_night', 'hotel_images']


class HotelAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelAddress
        fields = ['country_name', 'city_name', 'street_name']
