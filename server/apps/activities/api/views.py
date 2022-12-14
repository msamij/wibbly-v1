import json

from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.activitybookingdays.models import ActivityBookingDay, WeekDay
from server.apps.activitybookings.models import ActivityBooking
from server.apps.activityinstructors.api.serializers import \
    ActivityInstructorSerializer
from server.apps.activityinstructors.models import ActivityInstructor
from server.apps.useractivitybookings.models import UserActivityBooking
from server.apps.users.models import User
from server.utils.generic_view import *

from ..models import Activity
from .serializers import ActivitySerializer


@api_view(['GET'])
def activities(request):
    return JsonResponse(return_product(Activity, ActivitySerializer), safe=False)


@api_view(['GET'])
def activity(request, activity):
    activity = return_activity_instance(Activity, activity)
    activity_instructor = ActivityInstructor.objects.filter(
        activity_id=activity[0].id)

    activity_serializer = ActivitySerializer(activity, many=True)

    activity_instructor_serializer = ActivityInstructorSerializer(
        activity_instructor, many=True)
    return JsonResponse({'activity': activity_serializer.data, 'activity_instructor': activity_instructor_serializer.data}, safe=False)


@api_view(['GET'])
def booking_dates(request, activity):
    activity = return_activity_instance(Activity, activity)
    activity_booking_days = ActivityBookingDay.objects.filter(
        activity_id=activity[0].id)

    week_days = []
    for a in activity_booking_days:
        week_days.append(a.week_day.week_day)

    return JsonResponse({"bookingDates": week_days}, status=200, safe=False)


@api_view(['POST'])
def reserve_booking(request, activity):
    parse_json = json.load(request)
    activity = return_activity_instance(Activity, activity)
    week_day = WeekDay.objects.filter(week_day=parse_json['selectedDate'])
    user = User.objects.filter(google_auth_id=parse_json['userId'])

    if not ActivityBooking.objects.filter(activity_id=activity[0].id, activity_booking_day_id=week_day[0].id).exists():
        ActivityBooking(
            activity=activity[0], activity_booking_day=week_day[0]).save()

    activity_booking = ActivityBooking.objects.filter(
        activity_id=activity[0].id, activity_booking_day_id=week_day[0].id)
    UserActivityBooking(
        user_id=user[0].id, activity_booking=activity_booking[0]).save()

    return JsonResponse('Booking saved successfully', status=201, safe=False)
