from django.db import models


class TourBookingDate(models.Model):
    tour_booking_date = models.DateField()

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Tour Booking Date: {self.tour_booking_date}"
