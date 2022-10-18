from django.urls import path
from .views import *

urlpatterns = [
    path('', activities, name='activities'),
    path('<str:activity>', activity, name='activity')
]
