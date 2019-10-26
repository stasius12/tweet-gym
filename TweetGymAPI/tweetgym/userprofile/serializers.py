from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Profile
from exercises.serializers import ExerciseSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    exercises = ExerciseSerializer(many=True)

    class Meta:
        model = Profile
        fields = ['id', 'user', 'exercises']
