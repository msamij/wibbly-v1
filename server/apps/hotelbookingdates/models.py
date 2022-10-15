from django.db import models


class HotelBookingDate(models.Model):
    check_in_date = models.DateField()
    check_out_date = models.DateField()

    def __str__(self) -> str:
        return f"Pk: {self.pk}, Check In Date: {self.check_in_date}, Check Out Date: {self.check_out_date}"
