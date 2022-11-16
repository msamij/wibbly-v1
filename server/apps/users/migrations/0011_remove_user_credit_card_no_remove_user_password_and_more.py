# Generated by Django 4.1 on 2022-11-13 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_alter_user_credit_card_no'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='credit_card_no',
        ),
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
        migrations.AddField(
            model_name='user',
            name='google_auth_id',
            field=models.CharField(default=None, max_length=255, unique=True),
        ),
    ]