from django.urls import path

from .views import activity_bookings_exists

urlpatterns = [
    path('exists', activity_bookings_exists),
]
