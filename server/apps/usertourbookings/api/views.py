import json

from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.users.models import User

from ..models import UserTourBooking


@api_view(['GET'])
def tour_bookings_exists(request, user):
    user = User.objects.filter(google_auth_id=user)
    response = True
    if not UserTourBooking.objects.filter(user=user[0].id)[:1]:
        response = False
    return JsonResponse({'userTourBookingsExists': response}, status=200, safe=False)
