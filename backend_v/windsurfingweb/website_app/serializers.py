from rest_framework import serializers
from .models import HomePhotos, Members, Schedule, ResultPdf, GalleryPhotos, InstaShikan



# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = "__all__"
# class UserRegistrationSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)
    
#     class Meta:
#         model = User
#         fields = "__all__"
    
#     def create(self, validated_data):
#         user = User.objects.create_user(
#             username=validated_data['username'],
#             password=validated_data['password']
#         )
#         return user
    
class HomePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePhotos
        fields = '__all__'

class GalleryPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryPhotos
        fields = '__all__'

class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = '__all__'

class InstaShikanSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstaShikan
        fields = '__all__'

class ScheduleFileSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = ResultPdf
        fields = "__all__"

    def get_file_url(self, obj):
        request = self.context.get('request')
        if obj.file and hasattr(obj.file, 'url'):
            return request.build_absolute_uri(obj.file.url)
        return None

class ScheduleSerializer(serializers.ModelSerializer):
    files = ScheduleFileSerializer(many=True, read_only=True)

    class Meta:
        model = Schedule
        fields = ['id', 'event_name', 'start', 'end', 'result', 'photo', 'files']

    def create(self, validated_data):
        files_data = self.context['request'].FILES.getlist('files')
        schedule = Schedule.objects.create(**validated_data)
        for file_data in files_data:
           ResultPdf.objects.create(schedule=schedule, file=file_data)
        return schedule

    def update(self, instance, validated_data):
        files_data = self.context['request'].FILES.getlist('files')
        instance = super().update(instance, validated_data)
        for file_data in files_data:
            ResultPdf.objects.create(schedule=instance, file=file_data)
        return instance