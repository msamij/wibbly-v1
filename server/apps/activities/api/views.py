from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from server.apps.activities.api.serializers import ActivitySerializer
from server.apps.activities.models import Activity
from server.apps.activityinstructors.api.serializers import \
    ActivityInstructorSerializer
from server.apps.activityinstructors.models import ActivityInstructor


@require_http_methods(['GET'])
def activities(request):
    activity = Activity.objects.all()[:4]
    activity_serializer = ActivitySerializer(activity, many=True)
    return JsonResponse(activity_serializer.data, safe=False)


@require_http_methods(['GET'])
def activity(request, activity):
    activity = Activity.objects.filter(name=activity)
    activity_instructor = ActivityInstructor.objects.filter(
        activity_id=activity[0].id)
    activity_serializer = ActivitySerializer(activity, many=True)
    activity_instructor_serializer = ActivityInstructorSerializer(
        activity_instructor, many=True)
    return JsonResponse({'activity': activity_serializer.data, 'activity_instructor': activity_instructor_serializer.data}, safe=False)
