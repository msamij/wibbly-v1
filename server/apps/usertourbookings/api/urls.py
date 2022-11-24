from django.urls import path

from .views import tour_bookings_exists

urlpatterns = [
    path('exists', tour_bookings_exists),
]
