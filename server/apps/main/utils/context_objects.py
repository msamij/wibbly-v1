from server.apps.activities.models import Activity
from server.apps.activityimages.models import ActivityImage
from server.apps.hotelimages.models import HotelImage
from server.apps.hotels.models import Hotel
from server.apps.tourimages.models import TourImage
from server.apps.tours.models import Tour


def get_context() -> dict:
    return {
        'activities': get_activity_with_images(),
        'hotels': get_hotel_with_images(),
        'tours': get_tour_with_images(),
    }


def get_hotel_with_images() -> list:
    return [HotelImage.objects.filter(hotel=hotel.pk)[0] for hotel in Hotel.objects.all()[:4]]


def get_tour_with_images() -> list:
    return [TourImage.objects.filter(tour=tour.pk)[0] for tour in Tour.objects.all()[:4]]


def get_activity_with_images() -> list:
    return [ActivityImage.objects.filter(activity=activity.pk)[0] for activity in Activity.objects.all()[:4]]
