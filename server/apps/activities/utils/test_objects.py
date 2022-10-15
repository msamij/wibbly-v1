from server.apps.activities.models import Activity


def create_test_activity_object():
    return Activity.objects.create(name='test_activity', price=0, description='')
