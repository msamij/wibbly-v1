from django.db import models
from server.apps.tours.models import Tour


class TourImage(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    tour_image_url = models.URLField(max_length=255)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Tour: {self.tour}, Tour Image Url: {self.tour_image_url}"
