# Generated by Django 4.1 on 2022-08-14 09:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('instructors', '0001_initial'),
        ('tours', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TourInstructor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instructor', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='instructors.instructor')),
                ('tour', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='tours.tour')),
            ],
        ),
    ]
