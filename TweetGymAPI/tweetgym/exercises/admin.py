from django.contrib import admin

from .models import Exercise


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ['photo_url', 'name', 'cardio']


class ExerciseInline(admin.StackedInline):
    model = Exercise
    extra = 1
