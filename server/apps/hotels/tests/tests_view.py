from test_setup import HotelPageTestSetup


class HotelPageTest(HotelPageTestSetup):
    def setUp(self):
        super().setUp()

    def test_hotel_page_returns_correct_template(self):
        self.assertEqual(self.response.status_code, 200)
        self.assertTemplateUsed(self.response, 'hotel.html')
