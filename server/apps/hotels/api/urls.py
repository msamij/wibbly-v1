from django.urls import path

from .views import *

urlpatterns = [
    path('', hotels, name='hotels'),
    path('<str:hotel>', hotel, name='hotel'),
    path('<str:hotel>/booking-dates', booking_dates),
    path('<str:hotel>/reserve-booking', reserve_booking)
]
