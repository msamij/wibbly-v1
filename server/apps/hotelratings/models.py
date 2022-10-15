from django.db import models
from server.apps.hotels.models import Hotel
from server.apps.ratings.models import Rating


class HotelRating(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    rating = models.OneToOneField(Rating, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Hotel: {self.hotel}, Rating: {self.rating}"
