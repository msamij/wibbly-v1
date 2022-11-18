from rest_framework import serializers

from server.apps.activitybookingdays.models import ActivityBookingDay

from ..models import Activity


class ActivitySerializer(serializers.ModelSerializer):
    activity_images = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='activity_image_url'
    )

    class Meta:
        model = Activity
        fields = ['id', 'name', 'price', 'description',
                  'activity_images']


# class ActivityBookingDaysSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ActivityBookingDay
#         fields = ['week_day']
#         depth = 1
