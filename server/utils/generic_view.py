from typing import Generic, TypeVar

from django.db import models
from rest_framework import serializers

T = TypeVar('T', models.Model, models.Model)
S = TypeVar('S', serializers.ModelSerializer, serializers.ModelSerializer)

# class View():


def get_products(Model, Serializer):
    model_instance = Model.objects.all()[:4]
    serializer_instance = Serializer(model_instance, many=True)
    return serializer_instance.data


def get_product_details(product_name, Model1, Model2, Serializer1, Serializer2):
    model_instance = Model1.objects.filter(name=product_name)
    model_details_instance = Model2.objects.filter
