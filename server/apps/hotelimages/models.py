from django.db import models
from server.apps.hotels.models import Hotel


class HotelImage(models.Model):
    hotel = models.ForeignKey(
        Hotel, on_delete=models.CASCADE, related_name='hotel_images')
    hotel_image_url = models.URLField(max_length=255)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Hotel: {self.hotel}, Hotel Image Url: {self.hotel_image_url}"
