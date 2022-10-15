from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from server.apps.hotelbookings.models import HotelBooking
from server.apps.users.models import User


class UserHotelBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hotel_booking = models.ForeignKey(HotelBooking, on_delete=models.CASCADE)
    rooms_booked = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(20)])
    booking_amount = models.IntegerField(
        validators=[MinValueValidator(100), MaxValueValidator(400)])

    def __str__(self) -> str:
        return f"""Pk: {self.pk}, User: {self.user}, 
        Hotel Booking: {self.hotel_booking}, Rooms Booked: {self.rooms_booked}, 
        Booking Amount: {self.booking_amount}"""
