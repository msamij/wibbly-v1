from test_setup import TourPageTestSetup


class TourPageTest(TourPageTestSetup):
    def setUp(self):
        super().setUp()

    def test_tour_page_returns_correct_template(self):
        self.assertEqual(self.response.status_code, 200)
        self.assertTemplateUsed(self.response, 'tour.html')
