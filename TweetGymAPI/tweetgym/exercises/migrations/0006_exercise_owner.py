# Generated by Django 2.2.6 on 2019-10-26 14:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0001_initial'),
        ('exercises', '0005_auto_20191026_1554'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercise',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='exercises', to='userprofile.Profile'),
        ),
    ]