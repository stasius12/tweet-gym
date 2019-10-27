from django.urls import path, include
from rest_framework import routers
from .views import ExerciseViewSet, ExerciseRatingViewSet

router = routers.DefaultRouter()
router.register('ratings', ExerciseRatingViewSet)
router.register('exercises', ExerciseViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
