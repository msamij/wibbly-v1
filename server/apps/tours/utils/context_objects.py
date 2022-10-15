from server.apps.tourimages.models import TourImage
from server.apps.tourinstructors.models import TourInstructor
from server.apps.tourratings.models import TourRating
from server.apps.tours.models import Tour
from server.utils.context_objects import Context


class TourContext(Context[Tour]):

    def __init__(self, tour_name: str) -> None:
        super().__init__(Tour, tour_name)

    def get_tour_name(self) -> list:
        return self.get_context_obj_name()

    def get_tour_price(self) -> list:
        return self.get_context_obj_price()

    def get_tour_duration(self) -> list:
        return self.get_context_obj().duration

    def get_tour_description(self) -> list:
        return self.get_context_obj_description()

    def get_tour_max_participants(self) -> list:
        return self.get_context_obj().max_participants

    def get_tour_rating(self) -> list:
        return self.get_context_obj_rating(TourRating.objects.filter(tour__in=self.get_context()))

    def get_tour_images(self) -> list:
        return self.get_context_obj_images(TourImage.objects.filter(tour__in=self.get_context()))

    def get_tour_instructor(self) -> list:
        return self.get_context_obj_instructor(TourInstructor.objects.filter(tour__in=self.get_context()))


def get_context(tour_name: str) -> dict:
    tour_context_obj = TourContext(tour_name)

    return {
        'tour_name': tour_context_obj.get_tour_name(),
        'tour_price': tour_context_obj.get_tour_price(),
        'tour_description': tour_context_obj.get_tour_description(),
        'max_participants': tour_context_obj.get_tour_max_participants(),
        'tour_duration': tour_context_obj.get_tour_duration(),
        'tour_rating': tour_context_obj.get_tour_rating(),
        'tour_images': tour_context_obj.get_tour_images(),
        'tour_instructor': tour_context_obj.get_tour_instructor(),
    }
