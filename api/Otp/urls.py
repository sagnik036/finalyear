from . import views
from django.urls import path,include

urlpatterns = [
    path(
        'otpGenerate/<str:username>',
        views.getUsernameNumberRegistered.as_view()
    ),
]
