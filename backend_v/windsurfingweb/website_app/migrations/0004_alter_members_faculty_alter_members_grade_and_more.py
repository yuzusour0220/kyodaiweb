# Generated by Django 5.0.6 on 2024-06-23 08:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website_app', '0003_homephotos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='members',
            name='faculty',
            field=models.CharField(blank=True, max_length=10, verbose_name='学科'),
        ),
        migrations.AlterField(
            model_name='members',
            name='grade',
            field=models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('OB', 'OB')], max_length=20, verbose_name='学年'),
        ),
        migrations.AlterField(
            model_name='members',
            name='introduction',
            field=models.TextField(blank=True, verbose_name='自己紹介'),
        ),
        migrations.AlterField(
            model_name='members',
            name='photo',
            field=models.ImageField(blank=True, upload_to='photos/'),
        ),
        migrations.AlterField(
            model_name='members',
            name='position',
            field=models.CharField(blank=True, max_length=20, verbose_name='役職'),
        ),
        migrations.AlterField(
            model_name='members',
            name='sail_number',
            field=models.CharField(blank=True, max_length=8, verbose_name='セールナンバー'),
        ),
    ]
