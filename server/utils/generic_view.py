import json
from typing import TypeVar

from django.db import models
from rest_framework import serializers

# T = TypeVar('T', bound=models.Model)
# S = TypeVar('S', bound=serializers.ModelSerializer)


def return_product(Model, Serializer):
    model_instance = Model.objects.all()[:4]
    serializer_instance = Serializer(model_instance, many=True)
    return serializer_instance.data


def return_activity_instance(Activity, activity):
    return Activity.objects.filter(name=activity)


def return_tour_instance(Tour, tour):
    return Tour.objects.filter(name=tour)


def return_hotel_instance(Hotel, hotel):
    return Hotel.objects.filter(name=hotel)


def return_json_parsed_request(request):
    return json.load(request)
