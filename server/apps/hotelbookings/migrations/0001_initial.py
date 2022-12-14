# Generated by Django 4.1 on 2022-08-14 09:16

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('hotelbookingdates', '0001_initial'),
        ('hotels', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HotelBooking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('available_rooms', models.IntegerField(validators=[django.core.validators.MaxLengthValidator(3)])),
                ('hotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotels.hotel')),
                ('hotel_booking_date', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hotelbookingdates.hotelbookingdate')),
            ],
        ),
    ]
