import json


def return_product(Model, Serializer):
    model_instance = Model.objects.all()[:4]
    serializer_instance = Serializer(model_instance, many=True)
    return serializer_instance.data


def return_activity_instance(Activity, activity):
    return Activity.objects.filter(name=activity)


def return_tour_instance(Tour, tour):
    return Tour.objects.filter(name=tour)


def return_hotel_instance(Hotel, hotel):
    return Hotel.objects.filter(name=hotel)


def return_user_instance(User, userId):
    return User.objects.filter(google_auth_id=userId)


def return_json_parsed_request(request):
    return json.load(request)


def return_request_month(request):
    return request.GET.get('month')


def return_request_year(request):
    return request.GET.get('year')


def tour_booking_date_exists():
    pass
