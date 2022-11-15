import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from ..models import User


@csrf_exempt
def save(request):
    google_auth_id = json.load(request)['userId']
    if not User.objects.filter(google_auth_id=google_auth_id).exists():
        User(google_auth_id=google_auth_id).save()
    return JsonResponse('Success', status=200, safe=False)
