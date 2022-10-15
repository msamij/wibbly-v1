from django.test import Client, TestCase
from server.apps.hotels.utils.test_objects import create_test_hotel_object


class HotelPageTestSetup(TestCase):
    def setUp(self):
        self.client = Client()
        self.hotel = create_test_hotel_object()
        self.response = self.client.get('/hotels/test_hotel')
