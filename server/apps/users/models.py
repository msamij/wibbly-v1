from django.db import models


class User(models.Model):
    username = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=15)
    credit_card_no = models.IntegerField(unique=True)

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Username: {self.username}, Password: {self.password}, Credit Card No: {self.credit_card_no}"
