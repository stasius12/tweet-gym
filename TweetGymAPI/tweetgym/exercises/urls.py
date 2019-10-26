from django.urls import path, include
from rest_framework import routers
from .views import ExerciseViewSet

router = routers.DefaultRouter()
router.register('', ExerciseViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
