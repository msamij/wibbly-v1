from django.db import models
from server.apps.activities.models import Activity


DAYS_OF_WEEK = (
    ('Monday', 0),
    ('Tuesday', 1),
    ('Wednesday', 2),
    ('Thursday', 3),
    ('Friday', 4),
    ('Saturday', 5),
    ('Sunday', 6),
)


class WeekDay(models.Model):
    week_day = models.CharField(choices=DAYS_OF_WEEK, max_length=15)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Week Day: {self.week_day}"


class ActivityBookingDay(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    week_day = models.ForeignKey(WeekDay, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Activity: {self.activity}, Week Day: {self.week_day}"
