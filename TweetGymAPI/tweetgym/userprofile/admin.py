from django.contrib import admin

from .models import Profile
from exercises.admin import ExerciseInline


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    inlines = [ExerciseInline]
