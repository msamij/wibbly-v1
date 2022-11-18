from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.tourbookingdates.models import TourBookingDate
from server.apps.tourinstructors.api.serializers import \
    TourInstructorSerializer
from server.apps.tourinstructors.models import TourInstructor
from server.utils.construct_dates import construct_dates

from ..models import Tour
from .serializers import TourSerializer


@api_view(['GET'])
def tours(request):
    tours = Tour.objects.all()[:4]
    tours_serializer = TourSerializer(tours, many=True)
    return JsonResponse(tours_serializer.data, safe=False)


@api_view(['GET'])
def tour(request, tour):
    tour = Tour.objects.filter(name=tour)
    tour_instructor = TourInstructor.objects.filter(tour_id=tour[0].id)
    tour_serializer = TourSerializer(tour, many=True)
    tour_instructor_serializer = TourInstructorSerializer(
        tour_instructor, many=True)
    return JsonResponse({'tour': tour_serializer.data, 'tour_instructor': tour_instructor_serializer.data}, safe=False)


@api_view(['GET'])
def booking_dates(request, tour):
    month = request.GET.get('month')
    year = request.GET.get('year')
    tour = Tour.objects.filter(name=tour)
    tour_booking_dates = TourBookingDate.objects.filter(
        tour_booking_date__month=month, tour_booking_date__year=year)
    if not tour_booking_dates:
        dates = construct_dates(int(month), int(year))
    else:
        response = 'Found'
    return JsonResponse({'bookingDates': dates}, status=200, safe=False)
