from test_setup import ActivityPageTestSetup
from server.apps.activities.utils.context_objects import ActivityContext


class ActivityPageContextTest(ActivityPageTestSetup):
    def setUp(self):
        super().setUp()

    def test_activity_page_contains_correct_context(self):
        self.activity_context_obj = ActivityContext('test_activity')

        self.assertEqual(
            self.response.context['activity_name'], self.activity_context_obj.get_activity_name())
        self.assertEqual(
            self.response.context['activity_price'], self.activity_context_obj.get_activity_price())
        self.assertEqual(
            self.response.context['activity_description'], self.activity_context_obj.get_activity_description())
        self.assertEqual(
            self.response.context['activity_rating'], self.activity_context_obj.get_activity_rating())
        self.assertEqual(
            self.response.context['activity_images'], self.activity_context_obj.get_activity_images())
        self.assertEqual(
            self.response.context['activity_instructor'], self.activity_context_obj.get_activity_instructor())
