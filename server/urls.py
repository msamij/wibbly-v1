"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('server.apps.main.urls')),

    path('api/v1/users/', include('server.apps.users.api.urls')),
    path('api/v1/tours/', include('server.apps.tours.api.urls')),
    path('api/v1/hotels/', include('server.apps.hotels.api.urls')),
    path('api/v1/activities/', include('server.apps.activities.api.urls')),

    path('api/v1/users/<str:user>/tour-bookings/',
         include('server.apps.usertourbookings.api.urls')),
    path('api/v1/users/<str:user>/hotel-bookings/',
         include('server.apps.userhotelbookings.api.urls')),
    path('api/v1/users/<str:user>/activity-bookings/',
         include('server.apps.useractivitybookings.api.urls')),

    # This api is no longer used by wibbly client, and have been replaced by gapi on client side for authorization.
    path('api/v1/auth/', include('server.apps.authentication.api.urls')),
]
