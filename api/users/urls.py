from django.contrib import admin
from django.urls import path
from . import views

""" endpoint for user registrations/authentication """
urlpatterns =[
    path('user/', views.UserView.as_view()),
]
