from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, Http404
from rest_framework import viewsets, generics

from .serializers import ProfileSerializer
from .models import Profile


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


class UserDetailView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer
    allowed_methods = ['GET']

    def get_object(self):
        token = self.request.META.get('HTTP_AUTHORIZATION')
        if not token:
            raise Http404
        return get_object_or_404(
            User,
            auth_token=token.split('Token ')[-1]
        ).profile
