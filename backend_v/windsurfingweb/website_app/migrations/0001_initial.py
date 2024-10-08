# Generated by Django 5.0.6 on 2024-05-23 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='名前')),
                ('sail_number', models.CharField(max_length=8, verbose_name='セールナンバー')),
                ('position', models.CharField(max_length=20, verbose_name='役職')),
                ('faculty', models.CharField(max_length=10, verbose_name='学科')),
                ('grade', models.IntegerField(verbose_name='学年')),
                ('generation', models.IntegerField(verbose_name='期')),
                ('introduction', models.TextField(verbose_name='自己紹介')),
                ('photo', models.ImageField(upload_to='photos/')),
            ],
        ),
    ]
