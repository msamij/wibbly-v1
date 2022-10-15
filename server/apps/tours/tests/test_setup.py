from django.test import Client, TestCase
from server.apps.tours.utils.test_objects import create_test_tour_object


class TourPageTestSetup(TestCase):
    def setUp(self):
        super().setUp()
        self.client = Client()
        self.tour = create_test_tour_object()
        self.response = self.client.get('/tours/test_tour')
