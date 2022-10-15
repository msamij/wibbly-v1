from test_setup import HomePageTestSetup


class HomePageTest(HomePageTestSetup):
    def setUp(self):
        super().setUp()

    def test_home_page_returns_correct_template(self):
        self.assertEqual(self.response.status_code, 200)
        self.assertTemplateUsed(self.response, 'index.html')
