from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from server.apps.tourbookingdates.models import TourBookingDate
from server.apps.tours.models import Tour


class TourBooking(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    tour_booking_date = models.ForeignKey(
        TourBookingDate, on_delete=models.CASCADE)
    tour_participants = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(25)])

    def __str__(self) -> str:
        return f"""Pk: {self.pk}, Tour: {self.tour}, 
        Tour Booking Date: {self.tour_booking_date}, 
        Tour Participants: {self.tour_participants}"""
