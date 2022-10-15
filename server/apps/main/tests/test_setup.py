from django.test import Client, TestCase


class HomePageTestSetup(TestCase):
    def setUp(self):
        self.client = Client()
        self.response = self.client.get('/')
