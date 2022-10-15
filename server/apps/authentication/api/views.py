import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from server.apps.users.forms import UserForm
from server.apps.users.models import User


@require_http_methods(["POST"])
def signup_user(request):
    parsed_json = json.load(request)
    registered_form = UserForm(parsed_json)

    if not registered_form.is_valid():
        # This is just for extracting error messages and sending back to client.
        errors = list(dict(registered_form.errors).values())
        return JsonResponse(errors[len(errors)-1][0], status=400, safe=False)

    registered_form.save()
    User(username=parsed_json['username'],
         password=parsed_json['password1'],
         credit_card_no=parsed_json['credit_card_no']).save()
    user = authenticate(request,
                        username=parsed_json['username'],
                        password=parsed_json['password1'])
    login(request, user)
    return JsonResponse("Signup successful", status=201, safe=False)


@require_http_methods(["POST"])
def login_user(request):
    parsed_json = json.load(request)
    print(parsed_json)
    user = authenticate(request,
                        username=parsed_json['username'],
                        password=parsed_json['password1'])
    if user is not None:
        login(request, user)
        return JsonResponse('Logged in successfully', status=200, safe=False)

    return JsonResponse('Username or password incorrect', status=400, safe=False)


@require_http_methods(['POST'])
def logout_user(request):
    logout(request)
    return JsonResponse('Logged out successfully', status=200, safe=False)
