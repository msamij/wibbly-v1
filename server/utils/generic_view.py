import json

from server.apps.tourbookingdates.models import TourBookingDate
from server.apps.tourinstructors.api.serializers import TourInstructorSerializer
from server.apps.tourinstructors.models import TourInstructor
from server.apps.tours.api.serializers import TourSerializer


def return_product(Model, Serializer):
    model_instance = Model.objects.all()[:4]
    serializer_instance = Serializer(model_instance, many=True)
    return serializer_instance.data


def return_activity_instance(Activity, activity):
    return Activity.objects.filter(name=activity)


def return_tour_instance(Tour, tour):
    return Tour.objects.filter(name=tour)


def return_tour_instructor_instance(tour_id):
    return TourInstructor.objects.filter(tour_id=tour_id)


def return_tour_booking_date_instance(month, year):
    return TourBookingDate.objects.filter(tour_booking_date__month=month, tour_booking_date__year=year)


def return_tour_serializer_instance(tour_instance):
    return TourSerializer(tour_instance, many=True)


def return_tour_instructor_serializer_instance(tour_instructor_instance):
    return TourInstructorSerializer(tour_instructor_instance, many=True)


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
