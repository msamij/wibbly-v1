from django.db import models
from server.apps.ratings.models import Rating
from server.apps.tours.models import Tour


class TourRating(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE)
    rating = models.OneToOneField(Rating, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Tour: {self.tour}, Rating: {self.rating}"
