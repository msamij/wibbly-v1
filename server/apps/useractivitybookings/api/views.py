from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.users.models import User

from ..models import UserActivityBooking


@api_view(['GET'])
def activity_bookings_exists(request, user):
    user = User.objects.filter(google_auth_id=user)
    response = True
    if not UserActivityBooking.objects.filter(user=user[0].id).exists():
        response = False
    return JsonResponse({'userBookingsExists': response}, status=200, safe=False)
