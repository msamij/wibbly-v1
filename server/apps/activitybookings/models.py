from django.db import models

from server.apps.activities.models import Activity
from server.apps.activitybookingdays.models import WeekDay


class ActivityBooking(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    activity_booking_day = models.ForeignKey(
        WeekDay, on_delete=models.CASCADE, default=None)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Activity: {self.activity}, Activity Booking Date: {self.activity_booking_day}"
