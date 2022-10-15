from django.contrib import admin

from .models import ActivityBookingDay, WeekDay

admin.site.register(WeekDay)
admin.site.register(ActivityBookingDay)
