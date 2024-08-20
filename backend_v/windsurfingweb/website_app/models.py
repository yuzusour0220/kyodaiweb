from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils import timezone


class HomePhotos(models.Model):
    photo = models.ImageField("写真の縦横比は統一してください。", upload_to='photos/')
    
    def __str__(self):
        return self.photo.url

class GalleryPhotos(models.Model):
    photo = models.ImageField("写真の縦横比は16:9にしてください。", upload_to='photos/')
    
    def __str__(self):
        return self.photo.url

class InstaShikan(models.Model):
    account_name = models.CharField("アカウントid", max_length=30)
    url = models.URLField("インスタのURL")
    
    def __str__(self):
        return self.url

class Members(models.Model):
    CATEGORY_CHOICES = [("1", "1"), ("2", "2"), ("3", "3"), ("4", "4"), ("OB", "OB")]
    name = models.CharField("名前", max_length=30)
    sail_number = models.CharField("セールナンバー", max_length=8, blank=True)
    position = models.CharField("役職", max_length=20, blank=True)
    faculty = models.CharField("学科", max_length=20, blank=True)
    grade = models.CharField("学年", max_length=20, choices=CATEGORY_CHOICES)
    generation = models.IntegerField("期")
    introduction = models.TextField("自己紹介", blank=True)
    photo = models.ImageField(upload_to='photos/', blank=True)
    
    def __str__(self):
        return self.name

class ResultPdf(models.Model):
    file = models.FileField(upload_to='schedule_files/')
    name = models.CharField(max_length=100, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.file.name

class Schedule(models.Model):
    event_name = models.CharField("大会名", max_length=30)
    start = models.DateField("日付(開始)", default=timezone.now)
    end = models.DateField("日付(終了)", default=timezone.now)
    result = models.TextField("リザルト", blank=True)
    files = models.ManyToManyField(ResultPdf, related_name='schedules', blank=True)
    photo = models.ImageField(upload_to='photos/', blank=True)
    
    def __str__(self):
        return self.event_name