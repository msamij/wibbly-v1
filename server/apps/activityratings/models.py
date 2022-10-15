from django.db import models
from server.apps.activities.models import Activity
from server.apps.ratings.models import Rating


class ActivityRating(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    rating = models.OneToOneField(Rating, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Activity: {self.activity}, Rating: {self.rating}"
