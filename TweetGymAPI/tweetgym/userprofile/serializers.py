from django.contrib.auth.models import User
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer

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


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    def custom_signup(self, request, user):
        user.first_name = self.validated_data.get('first_name', '')
        user.last_name = self.validated_data.get('last_name', '')
        user.save(update_fields=['first_name', 'last_name'])
