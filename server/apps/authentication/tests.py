from django.test import Client, TestCase
from django.urls import reverse
from server.apps.authentication.api.views import *


class SignupTest(TestCase):
    def setUp(self):
        self.client = Client()

    def test_signup_successful(self):
        self.response = self.client.post(
            reverse('signup'), data={'username': 'msami',
                                     'password1': 'mynameissami2',
                                     'password2': 'mynameissami2',
                                     'credit_card_no': 1345678},
            content_type='application/json')
        self.assertEqual(self.response.status_code, 201)

    def test_signup_failed(self):
        self.response = self.client.post(
            reverse('signup'), data={'username': 'msami',
                                     'password1': 'mynameissami',
                                     'password2': 'myname',
                                     'credit_card_no': 1345678},
            content_type='application/json')
        self.assertEqual(self.response.status_code, 400)
