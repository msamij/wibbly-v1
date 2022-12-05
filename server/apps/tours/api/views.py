import json

from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.tourbookingdates.models import TourBookingDate
from server.apps.tourbookings.models import TourBooking
from server.apps.tourinstructors.api.serializers import \
    TourInstructorSerializer
from server.apps.tourinstructors.models import TourInstructor
from server.apps.users.models import User
from server.apps.usertourbookings.models import UserTourBooking
from server.utils.construct_dates import construct_booking_dates
from server.utils.generic_view import *

from ..models import Tour
from .serializers import TourSerializer


@api_view(['GET'])
def tours(request):
    return JsonResponse(return_product(Tour, TourSerializer), safe=False)


@api_view(['GET'])
def tour(request, tour):
    tour_instance = return_tour_instance(Tour, tour)
    tour_instructor_instance = TourInstructor.objects.filter(
        tour_id=tour_instance[0].id)

    tour_instance_serializer = TourSerializer(tour_instance, many=True)
    tour_instructor_serializer = TourInstructorSerializer(
        tour_instructor_instance, many=True)
    return JsonResponse({'tour': tour_instance_serializer.data, 'tour_instructor': tour_instructor_serializer.data}, safe=False)


@api_view(['GET'])
def booking_dates(request, tour):
    year = return_request_year(request)
    month = return_request_month(request)

    tour_booking_dates = TourBookingDate.objects.filter(
        tour_booking_date__month=month, tour_booking_date__year=year)

    if not tour_booking_dates:
        dates = construct_booking_dates(int(month), int(year))

    # Else if we have some booking on requested month, we must do calculuation to figure out what dates are available.

    return JsonResponse({'bookingDates': dates}, status=200, safe=False)


@api_view(['POST'])
def reserve_booking(request, tour):
    parsed_json = return_json_parsed_request(request)
    tour_instance = return_tour_instance(Tour, tour)

    if TourBookingDate.objects.filter(tour_booking_date=parsed_json['selectedDate']).exists():
        tour_booking_date = TourBookingDate.objects.filter(
            tour_booking_date=parsed_json['bookingDate'])

        tour_booking = TourBooking.objects.filter(
            tour_id=tour_instance[0].id, tour_booking_date_id=tour_booking_date[0].id)[0]

        tour_booking.tour_participants += 1
        tour_booking.save()
        # We must also save userTourBookings here.
    else:
        tour_booking_date = TourBookingDate(
            tour_booking_date=parsed_json['bookingDate'])
        tour_booking_date.save()

        tour_booking = TourBooking(
            tour=tour_instance[0], tour_booking_date=tour_booking_date, tour_participants=1)
        tour_booking.save()

        user_id = User.objects.filter(
            google_auth_id=parsed_json['userId'])[0].id
        UserTourBooking(
            user_id=user_id, tour_booking=tour_booking).save()
    return JsonResponse('Booking saved successfully', status=201, safe=False)
