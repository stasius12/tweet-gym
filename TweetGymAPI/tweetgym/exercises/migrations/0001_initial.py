# Generated by Django 2.2.6 on 2019-10-26 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('description', models.TextField()),
                ('difficulty', models.IntegerField(choices=[(1, 'Easy'), (2, 'Medium'), (3, 'Hard')])),
                ('muscle_group', models.CharField(choices=[('shoulders', 'shoulders'), ('chest', 'chest'), ('biceps', 'biceps'), ('triceps', 'triceps'), ('ABS', 'ABS'), ('legs', 'legs'), ('back', 'back')], max_length=64)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='photos')),
            ],
        ),
    ]
