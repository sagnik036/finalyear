from django.contrib import admin
from django.urls import path
from . import views

""" endpoint for user registrations/authentication """
urlpatterns =[
    path(
        'login/', 
        views.UserLoginView.as_view()
    ),
    path(
        'signUp/', 
        views.UserRegistrationView.as_view()
    ),
]
