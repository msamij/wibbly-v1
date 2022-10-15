# Generated by Django 4.1 on 2022-08-14 09:16

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=15, unique=True)),
                ('password', models.CharField(max_length=15)),
                ('credit_card_no', models.IntegerField(unique=True, validators=[django.core.validators.MaxLengthValidator(10)])),
            ],
        ),
    ]
