from django.urls import path
from .views import sign_in, bookings

urlpatterns = [
    path('signin', sign_in),
    path('<str:user>/bookings', bookings)
]
