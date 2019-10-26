from django.urls import path, include
from rest_framework import routers
from .views import ProfileViewSet

router = routers.DefaultRouter()
router.register('', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
