from django.contrib import admin
from .models import Members, HomePhotos, Schedule, ResultPdf, GalleryPhotos, InstaShikan, Sponsor

class ScheduleFileInline(admin.TabularInline):
    model = Schedule.files.through
    extra = 1

class ScheduleAdmin(admin.ModelAdmin):
    inlines = [ScheduleFileInline]
    exclude = ('files',)  # この行は 'files' フィールドをメインのフォームから除外します

admin.site.register(Members)
admin.site.register(HomePhotos)
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(ResultPdf)
admin.site.register(GalleryPhotos)
admin.site.register(InstaShikan)
admin.site.register(Sponsor)
