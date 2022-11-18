from django.db import models

from server.apps.instructors.models import Instructor
from server.apps.tours.models import Tour


class TourInstructor(models.Model):
    instructor = models.OneToOneField(
        Instructor, on_delete=models.CASCADE)
    tour = models.OneToOneField(Tour, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Instructor: {self.instructor}, Tour: {self.tour}"
