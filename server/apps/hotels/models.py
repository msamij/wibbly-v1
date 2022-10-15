from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Hotel(models.Model):
    name = models.CharField(max_length=15, unique=True)
    no_of_rooms = models.IntegerField(
        validators=[MinValueValidator(10), MaxValueValidator(100)])
    price_per_night = models.IntegerField(
        validators=[MinValueValidator(100), MaxValueValidator(400)])
    description = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"""Pk: {self.pk}, Hotel Name: {self.name}, 
        No Of Rooms: {self.no_of_rooms}, 
        Price Per Night: {self.price_per_night},
        Hotel Description: {self.description}"""


class HotelAddress(models.Model):
    hotel = models.OneToOneField(Hotel, on_delete=models.CASCADE)
    country_name = models.CharField(max_length=20)
    city_name = models.CharField(max_length=20)
    street_name = models.CharField(max_length=25)

    def __str__(self) -> str:
        return f"""Pk:{self.pk}, Hotel: {self.hotel}, 
        Country: {self.country_name}, City: {self.city_name}, 
        Street: {self.street_name}"""
