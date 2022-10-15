from django.urls import path
from .views import activity

urlpatterns = [
    path('<str:activity>', activity, name='activity'),
]
