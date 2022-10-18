from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from server.apps.tourinstructors.api.serializers import \
    TourInstructorSerializer
from server.apps.tourinstructors.models import TourInstructor

from ..models import Tour
from .serializers import TourSerializer


@require_http_methods(['GET'])
def tours(request):
    tours = Tour.objects.all()[:4]
    tours_serializer = TourSerializer(tours, many=True)
    return JsonResponse(tours_serializer.data, safe=False)


@require_http_methods(['GET'])
def tour(request, tour):
    tour = Tour.objects.filter(name=tour)
    tour_instructor = TourInstructor.objects.filter(tour_id=tour[0].id)
    tour_serializer = TourSerializer(tour, many=True)
    tour_instructor_serializer = TourInstructorSerializer(
        tour_instructor, many=True)
    return JsonResponse({'tour': tour_serializer.data, 'tour_instructor': tour_instructor_serializer.data}, safe=False)
