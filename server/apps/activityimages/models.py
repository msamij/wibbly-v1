from django.db import models
from server.apps.activities.models import Activity


class ActivityImage(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    activity_image_url = models.URLField(max_length=255)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Activity: {self.activity}, Activity Image Url: {self.activity_image_url}"
