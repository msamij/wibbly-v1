from django.db import models
from server.apps.tourbookings.models import TourBooking
from server.apps.users.models import User


class UserTourBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tour_booking = models.ForeignKey(TourBooking, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, User: {self.user}, Tour Booking: {self.tour_booking}"
