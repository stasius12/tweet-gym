from rest_framework import serializers

from .models import Exercise, ExerciseRating


# class ExerciseRatingSerializer(serializers.Serializer):
#     owner = serializers.PrimaryKeyRelatedField(many=True)
#
#     class Meta:
#         model = ExerciseRating
#         fields = ['value']


class ExerciseSerializer(serializers.ModelSerializer):
    # ratings = ExerciseRatingSerializer()

    class Meta:
        model = Exercise
        fields = ['id', 'name', 'description', 'cardio', 'difficulty', 'muscle_group', 'photo']
