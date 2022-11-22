from django.urls import path
from .views import *

urlpatterns = [
    path('', tours, name='tours'),
    path('<str:tour>', tour, name='tour'),
    path('<str:tour>/reserve-booking', reserve_booking),
    path('<str:tour>/booking-dates', booking_dates)
]
