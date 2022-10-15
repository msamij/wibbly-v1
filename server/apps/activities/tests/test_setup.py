from django.test import Client, TestCase
from server.apps.activities.utils.test_objects import \
    create_test_activity_object


class ActivityPageTestSetup(TestCase):
    def setUp(self):
        self.client = Client()
        self.activity = create_test_activity_object()
        self.response = self.client.get('/activities/test_activity')
