from rest_framework import serializers

from ..models import TourInstructor


class TourInstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourInstructor
        fields = ['instructor']
        depth = 1
