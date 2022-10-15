from server.apps.hotelimages.models import HotelImage
from server.apps.hotels.models import Hotel, HotelAddress
from server.utils.context_objects import Context


class HotelContext(Context[Hotel]):

    def __init__(self, hotel_name: str) -> None:
        super().__init__(Hotel, hotel_name)

    def get_hotel_name(self) -> list:
        return self.get_context_obj_name()

    def get_total_hotel_rooms(self) -> list:
        return self.get_context_obj().no_of_rooms

    def get_hotel_price(self) -> list:
        return self.get_context_obj().price_per_night

    def get_hotel_description(self) -> list:
        return self.get_context_obj_description()

    def get_hotel_address(self) -> list:
        return [hotel_address for hotel_address in HotelAddress.objects.filter(hotel__in=self.get_context())]

    def get_hotel_images(self) -> list:
        return self.get_context_obj_images(HotelImage.objects.filter(hotel__in=self.get_context()))


def get_context(hotel_name: str) -> dict:
    hotel_context_obj = HotelContext(hotel_name)

    return {
        'hotel_name': hotel_context_obj.get_hotel_name(),
        'no_of_rooms': hotel_context_obj.get_total_hotel_rooms(),
        'price_per_night': hotel_context_obj.get_hotel_price(),
        'hotel_description': hotel_context_obj.get_hotel_description(),
        'hotel_address': hotel_context_obj.get_hotel_address(),
        'hotel_images': hotel_context_obj.get_hotel_images(),
    }
