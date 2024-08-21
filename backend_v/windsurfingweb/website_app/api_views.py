from rest_framework import viewsets, filters, status
from .models import Members, HomePhotos, Schedule, GalleryPhotos, InstaShikan, Sponsor
from .serializers import MembersSerializer, HomePhotoSerializer, ScheduleSerializer, GalleryPhotoSerializer, InstaShikanSerializer, SponsorSerializer
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response

class MembersViewSet(viewsets.ModelViewSet):     
    queryset = Members.objects.all()     
    serializer_class = MembersSerializer     
    filter_backends = (filters.OrderingFilter,)

class HomePhotosViewSet(viewsets.ModelViewSet):
    queryset = HomePhotos.objects.all()
    serializer_class = HomePhotoSerializer
    filter_backends = (filters.OrderingFilter,)
    

class SponsorViewSet(viewsets.ModelViewSet):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    filter_backends = (filters.OrderingFilter,)
    
class GalleryPhotosViewSet(viewsets.ModelViewSet):
    queryset = GalleryPhotos.objects.all()
    serializer_class = GalleryPhotoSerializer
    filter_backends = (filters.OrderingFilter,)

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    filter_backends = (filters.OrderingFilter,)
class InstaShinkanViewSet(viewsets.ModelViewSet):
    queryset = InstaShikan.objects.all()
    serializer_class = InstaShikanSerializer
    filter_backends = (filters.OrderingFilter,)


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        # ユーザーが存在する場合の処理
        return Response({'message': 'Login successful'})
    else:
        # ユーザーが存在しない場合の処理
        return Response({'message': 'Invalid credentials'}, status=400)
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework_simplejwt.tokens import RefreshToken
# from django.contrib.auth import authenticate
# from rest_framework.views import APIView

# class UserRegistrationView(APIView):
#     def post(self, request):
#         serializer = UserRegistrationSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class LoginViewSet(TokenObtainPairView):
#     def post(self, request):
#         username = request.data.get('username')
#         password = request.data.get('password')
#         user = authenticate(username=username, password=password)
#         if user:
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#                 'user': {
#                     'id': user.id,
#                     'username': user.username,
#                     'email': user.email
#                 }
#             })
#         return Response({"error": "Invalid credentials"}, status=400)