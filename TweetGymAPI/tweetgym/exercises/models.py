from django.db import models
from multiselectfield import MultiSelectField


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
    description = models.TextField()
    cardio = models.BooleanField(default=False)
    difficulty = models.IntegerField(choices=DIFFICULTY_CHOICES)
    muscle_group = MultiSelectField(choices=MUSCLE_GROUP_CHOICES, blank=True, null=True)
    photo = models.ImageField(upload_to="photos", blank=True, null=True)


    DUŻY PYTONG

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.cardio:
            self.muscle_group = []
        super().save(*args, **kwargs)