from rest_framework import serializers
from . models import Exercise


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['name', 'owner', 'description', 'cardio', 'difficulty', 'muscle_group', 'photo']
