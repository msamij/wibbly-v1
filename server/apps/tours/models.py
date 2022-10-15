from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Tour(models.Model):
    name = models.CharField(max_length=15, unique=True)
    price = models.IntegerField(
        validators=[MinValueValidator(100), MaxValueValidator(400)])
    description = models.CharField(max_length=100)
    max_participants = models.IntegerField(
        validators=[MinValueValidator(10), MaxValueValidator(25)])
    duration = models.IntegerField(
        validators=[MinValueValidator(10), MaxValueValidator(20)])

    def __str__(self) -> str:
        return f"""Pk: {self.pk}, Tour Name: {self.name}, 
        Tour Price: {self.price}, Tour Description: {self.description}, 
       Tour Duration: {self.duration}, Max Participants: {self.max_participants}"""
