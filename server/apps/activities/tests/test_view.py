from test_setup import ActivityPageTestSetup


class ActivityPageTest(ActivityPageTestSetup):
    def setUp(self):
        super().setUp()

    def test_activity_page_returns_correct_template(self):
        self.assertEqual(self.response.status_code, 200)
        self.assertTemplateUsed(self.response, 'activity.html')
