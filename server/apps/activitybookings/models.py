from django.db import models
from server.apps.activities.models import Activity


class ActivityBooking(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    activity_booking_date = models.DateField()

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Activity: {self.activity}, Activity Booking Date: {self.activity_booking_date}"
