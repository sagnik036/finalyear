from rest_framework.response import Response
from api.common.error_messages.error_messages import FormatErrorResponses
from .serializers import *
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import status
from .services import *
# Create your views here.


class UserLoginView(GenericAPIView):
    """ registers/authenticates user and return and jwt token """
    serializer_class = UserAuthenticationSerializer
    """ it authenticates user and returns jwt token """
    @classmethod
    def post(cls, request):
        serializers = UserAuthenticationSerializer(data=request.data)
        is_valid = serializers.is_valid()
        data = serializers.validated_data

        if is_valid:
            response = UserServices.verifyProfiles(data)
            return response
        else:
            errors = FormatErrorResponses.error_response(serializers.errors)
            response = {
                "errors": errors
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class UserRegistrationView(GenericAPIView):
    """ it registers user and returns an jwt token for further authentication """
    serializer_class = UserRegistrationsSerilaizer
    @classmethod
    def post(cls, request):
        serializers = UserRegistrationsSerilaizer(data=request.data)
        is_Valid = serializers.is_valid()
        data = serializers.validated_data

        if is_Valid:
            response  = UserServices.save(data)
            return response
        else:
            errors = FormatErrorResponses.error_response(serializers.errors)
            response = {
                "errors": errors
            }
            return Response(response, status=status.HTTP_400_BAD_REQUEST)