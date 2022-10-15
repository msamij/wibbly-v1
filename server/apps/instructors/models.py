from django.db import models


class Instructor(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    instructor_image = models.URLField(max_length=255)

    def __str__(self) -> str:
        return f"""Pk: {self.pk}, First Name: {self.first_name}, 
       Last Name: {self.last_name}, 
       Instructor Image: {self.instructor_image}"""
