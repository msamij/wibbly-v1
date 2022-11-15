from django.db import models


class User(models.Model):
    google_auth_id = models.CharField(
        max_length=255, unique=True, default=None)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Google Auth ID: {self.google_auth_id}"
