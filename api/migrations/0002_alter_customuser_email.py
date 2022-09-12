# Generated by Django 3.2 on 2022-09-12 01:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(db_index=True, error_messages={'required': 'My custom error'}, max_length=254, unique=True),
        ),
    ]