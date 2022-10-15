from server.apps.tours.models import Tour


def create_test_tour_object():
    return Tour.objects.create(name='test_tour', price=0, description='', max_participants=0, duration=0)
