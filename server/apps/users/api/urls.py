from django.urls import include, path
from .views import save

urlpatterns = [
    path('save', save),
]
