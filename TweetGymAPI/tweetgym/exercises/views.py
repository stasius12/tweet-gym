from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import ExerciseSerializer, ExerciseRatingSerializer
from .models import Exercise, ExerciseRating


class ExerciseViewSet(viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['difficulty', 'muscle_group']
    search_fields = ['muscle_group']


class ExerciseRatingViewSet(viewsets.ModelViewSet):
    serializer_class = ExerciseRatingSerializer
    queryset = ExerciseRating.objects.all()
