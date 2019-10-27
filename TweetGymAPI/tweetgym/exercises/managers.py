from django.db import models


class RatingManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().annotate(avg_rating=models.Avg('ratings__value'))
