import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from server.apps.users.models import User

from ..models import UserTourBooking


@csrf_exempt
def tour_bookings_exists(request):
    parsed_json = json.load(request)
    user = User.objects.filter(google_auth_id=parsed_json['userId'])
    response = True
    if not UserTourBooking.objects.filter(user=user[0].id)[:1]:
        response = False
    return JsonResponse({'userTourBookingsExists': response}, status=200, safe=False)
