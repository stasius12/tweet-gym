# Generated by Django 2.2.6 on 2019-10-26 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('exercises', '0003_auto_20191026_1541'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='cardio',
            field=models.BooleanField(default=False),
        ),
    ]
