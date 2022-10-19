from rest_framework import serializers
from .models import *

class UserRegistrationsSerilaizer(serializers.ModelSerializer):
    """ user registration serialziers fields declarations """
    class Meta:
        model = CustomUser
        fields = [
            'username',
            'profile_pic',
            'first_name',
            'last_name',
            'email',
            'mobile',
            'account_type',
            'password'
        ]

class UserAuthenticationSerializer(serializers.Serializer):
    """ authentication fields declarerations """

    username = serializers.CharField(
        required =True
    )
    password = serializers.CharField(
        required = False
    )
    grant_type = serializers.CharField(
        required = True
    )

    @classmethod
    def validate(cls, data):
        errors = {}

        if errors:
            raise serializers.ValidationError(data)
        return super(UserAuthenticationSerializer, cls).validate(cls, data)