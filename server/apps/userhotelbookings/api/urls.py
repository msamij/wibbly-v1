from django.urls import path

from .views import hotel_bookings_exists

urlpatterns = [
    path('exists', hotel_bookings_exists),
]
