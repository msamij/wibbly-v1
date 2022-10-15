from django.db import models
from server.apps.activitybookings.models import ActivityBooking
from server.apps.users.models import User


class UserActivityBooking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_booking = models.ForeignKey(
        ActivityBooking, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, User: {self.user}, Activity Booking: {self.activity_booking}"
