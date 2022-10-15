from django.urls import path
from .views import hotel

urlpatterns = [
    path('<str:hotel>', hotel, name='hotel'),
]
