from rest_framework import viewsets, filters
from django_filters import rest_framework, FilterSet, ChoiceFilter, NumberFilter

from .serializers import ExerciseSerializer, ExerciseRatingSerializer
from .models import Exercise, ExerciseRating


class F(FilterSet):
    have_muscle_group = ChoiceFilter(
        choices=Exercise.MUSCLE_GROUP_CHOICES,
        field_name='muscle_group',
        method='filter_muscle_group'
    )
    avg_rating_gt = NumberFilter(
        field_name='avg_rating',
        method='filter_avg_rating_gt'
    )

    def filter_muscle_group(self, queryset, name, value):
        return queryset.filter(muscle_group__icontains=value)

    def filter_avg_rating_gt(self, queryset, name, value):
        return queryset.filter(avg_rating__gt=value)

    class Meta:
        model = Exercise
        fields = ['have_muscle_group', 'difficulty', 'cardio', 'avg_rating_gt']


class ExerciseViewSet(viewsets.ModelViewSet):
    serializer_class = ExerciseSerializer
    queryset = Exercise.objects.all()
    filter_backends = [rest_framework.DjangoFilterBackend, filters.SearchFilter]
    filterset_class = F
    search_fields = ['muscle_group']


class ExerciseRatingViewSet(viewsets.ModelViewSet):
    serializer_class = ExerciseRatingSerializer
    queryset = ExerciseRating.objects.all()
