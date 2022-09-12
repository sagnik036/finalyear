from rest_framework import serializers
from .models import *

class UserRegistrationsSerilaizer(serializers.Serializer):
    """ user registration serialziers fields declarations """

    email = serializers.EmailField(
        required =True
    )
    full_name = serializers.CharField(
        required = True
    )
    mobile = serializers.IntegerField(
        required = True
    )
    password = serializers.CharField(
        required=True
    )
    account_type = serializers.IntegerField(
        required = True
    )

class UserAuthenticationSerializer(serializers.Serializer):
    """ authentication fields declarerations """

    email = serializers.EmailField(
        required =True
    )
    password = serializers.CharField(
        required=True
    )