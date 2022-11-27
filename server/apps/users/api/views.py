import json

from django.http import JsonResponse
from rest_framework.decorators import api_view

from server.apps.useractivitybookings.models import UserActivityBooking
from server.apps.userhotelbookings.models import UserHotelBooking
from server.apps.usertourbookings.models import UserTourBooking

from ..models import User


@api_view(['POST'])
def sign_in(request):
    google_auth_id = json.load(request)['userId']
    if not User.objects.filter(google_auth_id=google_auth_id).exists():
        User(google_auth_id=google_auth_id).save()
    return JsonResponse('Success', status=200, safe=False)


@api_view(['GET'])
def bookings(request, user):
    user = User.objects.filter(google_auth_id=user)
    user_hotel_booking = None
    user_tour_bookings = None
    user_activity_bookings = None
    json_response = {}

    if UserHotelBooking.objects.filter(user_id=user[0].id).exists():
        user_hotel_booking = UserHotelBooking.objects.filter(
            user_id=user[0].id)
        json_response['hotelBookings'] = {
            'hotelName': user_hotel_booking[0].hotel_booking.hotel.name,
            'checkInDate': user_hotel_booking[0].hotel_booking.hotel_booking_date.check_in_date,
            'checkOutDate': user_hotel_booking[0].hotel_booking.hotel_booking_date.check_out_date
        }

    if UserTourBooking.objects.filter(user_id=user[0].id).exists():
        user_tour_bookings = UserTourBooking.objects.filter(user_id=user[0].id)
        json_response['tourBookings'] = [{
            'tourName': user_tour_bookings[0].tour_booking.tour.name,
            'bookingDate': user_tour_bookings[0].tour_booking.tour_booking_date.tour_booking_date
        }]

    if UserActivityBooking.objects.filter(user_id=user[0].id).exists():
        user_activity_bookings = UserActivityBooking.objects.filter(
            user_id=user[0].id)
        json_response['activityBookings'] = [{
            'activityName': user_activity_bookings[0].activity_booking.activity.name,
            'bookingDay': user_activity_bookings[0].activity_booking.activity_booking_day.week_day
        }]

    return JsonResponse(json_response, safe=False)
