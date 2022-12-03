from typing import TypeVar

from django.db import models
from rest_framework import serializers

T = TypeVar('T', bound=models.Model)
S = TypeVar('S', bound=serializers.ModelSerializer)


def return_product(Model: T, Serializer: S):
    model_instance = Model.objects.all()[:4]
    serializer_instance = Serializer(model_instance, many=True)
    return serializer_instance.data


def return_product_details(product_name, Model1, Model2, Serializer1, Serializer2):
    model_instance = Model1.objects.filter(name=product_name)
    model_details_instance = Model2.objects.filter
