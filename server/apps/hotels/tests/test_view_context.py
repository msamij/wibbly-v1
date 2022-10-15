from server.apps.hotels.utils.context_objects import HotelContext

from test_setup import HotelPageTestSetup


class HotelPageContextTest(HotelPageTestSetup):
    def setUp(self):
        super().setUp()

    def test_hotel_page_contains_correct_context(self):
        self.hotel_context_obj = HotelContext('test_hotel')

        self.assertEqual(
            self.response.context['hotel_name'], self.hotel_context_obj.get_hotel_name())
        self.assertEqual(
            self.response.context['no_of_rooms'], self.hotel_context_obj.get_total_hotel_rooms())
        self.assertEqual(
            self.response.context['price_per_night'], self.hotel_context_obj.get_hotel_price())
        self.assertEqual(
            self.response.context['hotel_description'], self.hotel_context_obj.get_hotel_description())
        self.assertEqual(
            self.response.context['hotel_address'], self.hotel_context_obj.get_hotel_address())
        self.assertEqual(
            self.response.context['hotel_images'], self.hotel_context_obj.get_hotel_images())
