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

    def post(self, request):
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

    def post(self, request):
        serializers = UserRegistrationsSerilaizer(data=request.data)

        if not serializers.is_valid():
            return Response(serializers.errors, status=status.HTTP_406_NOT_ACCEPTABLE)

        try:
            username = serializers.validated_data['username']
            otp_username = OtpModel.objects.get(username=username)
            first_name = serializers.validated_data['first_name']
            last_name = serializers.validated_data['last_name']
            email = serializers.validated_data['email']
            mobile = serializers.validated_data['mobile']
            account_type = serializers.validated_data['account_type']
            password = serializers.validated_data['password']

            if (otp_username.isVerified == True):
                """ creates an user in the CustomUser Model """
                User = CustomUser.objects.create(
                    username=username,
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    mobile=mobile,
                    password=make_password(password),
                    account_type=account_type,
                    profile_pic=serializers.validated_data['profile_pic']
                )

                """ generates an jwt token for the user """
                access_token = RefreshToken.for_user(User)
                response = {
                    "user_id": User.id,
                    "name": User.first_name + " "+User.last_name,
                    "email": User.email,
                    "mobile": User.mobile,
                    "access_token": str(access_token.access_token),
                }
                otp_username.isVerified = False
                otp_username.save()
                return Response(response, status=status.HTTP_200_OK)
            else:
                response = {
                    "message": "otp expired/not verified"
                }
                return Response(response, status=404)

        except:
            response = {
                "message": "otp expired/not verified"
            }
            return Response(response, status=404)
