from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from server.apps.hotelbookingdates.models import HotelBookingDate
from server.apps.hotels.models import Hotel


class HotelBooking(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    hotel_booking_date = models.ForeignKey(
        HotelBookingDate, on_delete=models.CASCADE)
    available_rooms = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)])

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Hotel: {self.hotel}, Hotel Booking Date: {self.hotel_booking_date}, Available Rooms: {self.available_rooms}"
