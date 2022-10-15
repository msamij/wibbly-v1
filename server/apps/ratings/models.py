from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from server.apps.users.models import User


class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating_stars = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)])
    review = models.CharField(max_length=50, blank=True)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, User: {self.user}, Rating Stars: {self.rating_stars}, Review: {self.review}"
