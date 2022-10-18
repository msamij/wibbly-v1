from django.urls import path

from .views import *

urlpatterns = [
    path('', hotels, name='hotels'),
    path('<str:hotel>', hotel, name='hotel'),
]
