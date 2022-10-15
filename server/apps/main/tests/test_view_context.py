from server.apps.main.utils.context_objects import get_context

from test_setup import HomePageTestSetup


class HomePageContextTest(HomePageTestSetup):
    def setUp(self):
        super().setUp()

    def test_home_page_contains_correct_context(self):
        self.assertEqual(
            self.response.context['activities'], get_context()['activities'])
        self.assertEqual(
            self.response.context['hotels'], get_context()['hotels'])
        self.assertEqual(
            self.response.context['tours'], get_context()['tours'])
