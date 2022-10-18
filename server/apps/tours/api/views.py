from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from server.apps.tourinstructors.api.serializers import \
    TourInstructorSerializer
from server.apps.tourinstructors.models import TourInstructor

from ..models import Tour
from .serializers import ToursSerializer


def tours(request):
    tours = Tour.objects.all()[:4]
    tours_serializer = ToursSerializer(tours, many=True)
    return JsonResponse(tours_serializer.data, safe=False)


def tour(request, tour):
    tour = Tour.objects.filter(name=tour)
    tour_instructor = TourInstructor.objects.filter(tour_id=tour[0].id)
    tour_instructor_serializer = TourInstructorSerializer(
        tour_instructor, many=True)
    tour_serializer = ToursSerializer(tour, many=True)
    return JsonResponse({'tour': tour_serializer.data, 'tour_instructor': tour_instructor_serializer.data}, safe=False)
