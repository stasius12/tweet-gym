from django.db import models
from django.utils.html import format_html

from multiselectfield import MultiSelectField

from .managers import RatingManager


class Exercise(models.Model):
    EASY_STATUS = 1
    MEDIUM_STATUS = 2
    HARD_STATUS = 3
    DIFFICULTY_CHOICES = (
        (EASY_STATUS, 'Easy'),
        (MEDIUM_STATUS, 'Medium'),
        (HARD_STATUS, 'Hard'),
    )

    MUSCLE_GROUP_CHOICES = (
        ('shoulders', 'Shoulders'),
        ('chest', 'Chest'),
        ('biceps', 'Biceps'),
        ('triceps', 'Triceps'),
        ('ABS', 'ABS'),
        ('legs', 'Legs'),
        ('back', 'Back'),
    )

    name = models.CharField(max_length=256)
    owner = models.ForeignKey('userprofile.Profile', on_delete=models.SET_NULL, null=True, related_name='exercises')
    description = models.TextField()
    cardio = models.BooleanField(default=False)
    difficulty = models.IntegerField(choices=DIFFICULTY_CHOICES)
    muscle_group = MultiSelectField(choices=MUSCLE_GROUP_CHOICES, blank=True, null=True)
    photo = models.ImageField(upload_to="photos", blank=True, null=True)

    objects = RatingManager()

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.cardio:
            self.muscle_group = []
        super().save(*args, **kwargs)

    def photo_url(self):
        if self.photo:
            return format_html(f"<img style='max-width: 200px' src='{self.photo.url}'></a>")


class ExerciseRating(models.Model):
    VALUE_CHOICES = [
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    ]
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name='ratings')
    owner = models.ForeignKey('userprofile.Profile', on_delete=models.CASCADE, related_name='ratings')
    value = models.IntegerField("Rating value, integer from 1 to 5", choices=VALUE_CHOICES)

    class Meta:
        unique_together = ['exercise', 'owner']

    def __str__(self):
        return f"Rating: {self.value} from {self.owner}"
