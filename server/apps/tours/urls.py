from django.urls import path
from .views import tour

urlpatterns = [
    path('<str:tour>', tour, name='tour')
]
