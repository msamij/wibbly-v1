from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Activity(models.Model):
    name = models.CharField(max_length=15, unique=True)
    price = models.IntegerField(
        validators=[MinValueValidator(100), MaxValueValidator(2500)])
    description = models.CharField(max_length=100)

    def __str__(self) -> str:
        return f"""Pk: {self.pk}, 
        Activity Name: {self.name}, 
        Activity Price: {self.price}, 
        Activity Description: {self.description}"""
