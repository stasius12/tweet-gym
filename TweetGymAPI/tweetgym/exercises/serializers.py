from rest_framework import serializers

from .models import Exercise, ExerciseRating


class ExerciseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseRating
        fields = '__all__'


class ExerciseSerializer(serializers.ModelSerializer):
    ratings = ExerciseRatingSerializer(many=True, read_only=True)

    class Meta:
        model = Exercise
        fields = ['id', 'name', 'description', 'cardio', 'difficulty', 'muscle_group', 'photo', 'ratings', 'avg_rating']
