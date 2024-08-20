"""
URL configuration for windsurfingweb project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from website_app import api_views
from website_app.api_views import login_view

members_list = api_views.MembersViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
members_detail = api_views.MembersViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

homephotos_list = api_views.HomePhotosViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
homephotos_detail = api_views.HomePhotosViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})
galleryphotos_list = api_views.GalleryPhotosViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
galleryphotos_detail = api_views.GalleryPhotosViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})


schedule_list = api_views.ScheduleViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
schedule_detail = api_views.ScheduleViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/members/', members_list, name='members-list'),
    path('api/members/<int:pk>/', members_detail, name='members-detail'),
    path('api/homephotos/', homephotos_list, name='homephotos-list'),
    path('api/homephotos/<int:pk>/', homephotos_detail, name='homephotos-detail'),
    path('api/schedule/', schedule_list, name='schedule-list'),
    path('api/schedule/<int:pk>/', schedule_detail, name='schedule-detail'),
    path('api/galleryphotos/', galleryphotos_list, name='homephotos-list'),
    path('api/galleryphotos/<int:pk>/', galleryphotos_detail, name='homephotos-detail'),
    path("api/instashinkan/", api_views.InstaShinkanViewSet.as_view({"get": "list"})),
    path("api/instashinkan/<int:pk>/", api_views.InstaShinkanViewSet.as_view({"get": "retrieve"})),
    path('api/login/', login_view, name='login'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
