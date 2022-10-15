from django.db import models
from server.apps.activities.models import Activity
from server.apps.instructors.models import Instructor


class ActivityInstructor(models.Model):
    instructor = models.OneToOneField(
        Instructor, on_delete=models.CASCADE)
    activity = models.OneToOneField(Activity, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Instructor: {self.instructor}, Activity: {self.activity}"
