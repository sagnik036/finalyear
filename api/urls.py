from django.contrib import admin
from django.urls import path,include

""" api endpoint """
urlpatterns = [
    path('',include('api.users.urls')),
    path('',include('api.Otp.urls')),
]
