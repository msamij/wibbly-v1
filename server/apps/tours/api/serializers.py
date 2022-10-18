from rest_framework import serializers

from ..models import Tour


class TourSerializer(serializers.ModelSerializer):
    tour_images = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='tour_image_url'
    )

    class Meta:
        model = Tour
        fields = ['id', 'name', 'price', 'max_participants',
                  'duration', 'description', 'tour_images']
