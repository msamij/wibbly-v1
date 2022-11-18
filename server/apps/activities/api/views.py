from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.activitybookingdays.models import ActivityBookingDay
from server.apps.activityinstructors.api.serializers import \
    ActivityInstructorSerializer
from server.apps.activityinstructors.models import ActivityInstructor

from ..models import Activity
from .serializers import ActivitySerializer


@api_view(['GET'])
def activities(request):
    activity = Activity.objects.all()[:4]
    activity_serializer = ActivitySerializer(activity, many=True)
    return JsonResponse(activity_serializer.data, safe=False)


@api_view(['GET'])
def activity(request, activity):
    activity = Activity.objects.filter(name=activity)

    activity_instructor = ActivityInstructor.objects.filter(
        activity_id=activity[0].id)

    activity_serializer = ActivitySerializer(activity, many=True)

    activity_instructor_serializer = ActivityInstructorSerializer(
        activity_instructor, many=True)
    return JsonResponse({'activity': activity_serializer.data, 'activity_instructor': activity_instructor_serializer.data}, safe=False)


@api_view(['GET'])
def booking_dates(request, activity):
    week_days = []
    activity = Activity.objects.filter(name=activity)
    activity_booking_days = ActivityBookingDay.objects.filter(
        activity_id=activity[0].id)

    for a in activity_booking_days:
        week_days.append(a.week_day.week_day)

    return JsonResponse({"bookingDates": week_days}, status=200, safe=False)
