from django.contrib import admin

from .models import Exercise, ExerciseRating


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ['photo_url', 'name', 'cardio', 'muscle_group', 'avg_rating']

    def avg_rating(self, obj):
        return obj.avg_rating
    avg_rating.admin_order_field = 'avg_rating'


class ExerciseInline(admin.StackedInline):
    model = Exercise
    extra = 1


@admin.register(ExerciseRating)
class ExerciseRatingAdmin(admin.ModelAdmin):
    list_display = ['value', 'owner', 'exercise']
