# Generated by Django 2.2.6 on 2019-10-26 13:54

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0004_exercise_cardio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='muscle_group',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('shoulders', 'Shoulders'), ('chest', 'Chest'), ('biceps', 'Biceps'), ('triceps', 'Triceps'), ('ABS', 'ABS'), ('legs', 'Legs'), ('back', 'Back')], max_length=44, null=True),
        ),
    ]