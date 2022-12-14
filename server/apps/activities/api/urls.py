from django.urls import path
from .views import *

urlpatterns = [
    path('', activities, name='activities'),
    path('<str:activity>', activity, name='activity'),
    path('<str:activity>/booking-dates', booking_dates),
    path('<str:activity>/reserve-booking', reserve_booking)
]
