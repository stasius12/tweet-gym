from rest_framework import viewsets, permissions

from .serializers import ProfileSerializer
from .models import Profile


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = [permissions.IsAuthenticated]
