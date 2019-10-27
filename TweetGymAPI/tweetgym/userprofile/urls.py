from django.urls import path, include
from rest_framework import routers
from .views import ProfileViewSet, UserDetailView

router = routers.DefaultRouter()
router.register('', ProfileViewSet)

urlpatterns = [
    path('detail/', UserDetailView.as_view()),
    path('', include(router.urls)),
]
