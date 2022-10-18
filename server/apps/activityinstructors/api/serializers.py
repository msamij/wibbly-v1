from rest_framework import serializers
from server.apps.activityinstructors.models import ActivityInstructor


class ActivityInstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityInstructor
        fields = ['instructor']
        depth = 1
