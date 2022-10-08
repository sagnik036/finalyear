from rest_framework.response import Response
from .serializers import *
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import status
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
from api.models import *
# Create your views here.

class UserLoginView(GenericAPIView):
    """ registers/authenticates user and return and jwt token """
    serializer_class = UserAuthenticationSerializer
    """ it authenticates user and returns jwt token """
    def post(self,request):
        serializers = UserAuthenticationSerializer(data = request.data)
       
        if not serializers.is_valid():
            return Response(serializers.errors,status=status.HTTP_406_NOT_ACCEPTABLE)
        
        """ checks wheater a valid user is present or not """
        if (serializers.validated_data['grant_type'] == 'password'):
            try:
                User = CustomUser.objects.get(username = serializers.validated_data['username'])
            except:
                response ={
                    "message" : "no user found"
                }
                return Response(response,status=404)

            if User.check_password(serializers.data['password']):
                    access_token = RefreshToken.for_user(User)
                    response ={
                    "message" : " authenticated successfully ",
                    "id" : User.id,
                    "email" : User.email,
                    "mobile" : User.mobile,
                    "name"   : User.first_name + " " + User.last_name,
                    "account_type" : User.account_type,
                    "access_token": str(access_token.access_token),
                    }
                    return Response(response,status=200)
            else:
                response = {
                    "message" : "check your password",
                }
                return Response(response,status.HTTP_406_NOT_ACCEPTABLE)

        elif (serializers.validated_data['grant_type'] == 'otp'):
            try:
                otp_username = OtpModel.objects.get(username = serializers.validated_data['username'])
                User = CustomUser.objects.get(username = serializers.validated_data['username'])
                if (otp_username.isVerified == True):
                    access_token = RefreshToken.for_user(User)
                    response ={
                        "message" : " authenticated successfully ",
                        "id" : User.id,
                        "email" : User.email,
                        "mobile" : User.mobile,
                        "name"   : User.first_name + " " + User.last_name,
                        "account_type" : User.account_type,
                        "access_token": str(access_token.access_token),
                    }
                    otp_username.isVerified = False
                    otp_username.save()
                    return Response(response,status=200)
                else:
                    response = {
                        "message" : "otp not verified/otp expired"
                    }
                    return Response(response,status=404)
            except:
                response ={
                    "message" : "no valid user found"
                }
                return Response(response,status=404)
            

class UserRegistrationView(GenericAPIView):
    """ it registers user and returns an jwt token for further authentication """
    serializer_class = UserRegistrationsSerilaizer

    def post(self,request):
        serializers = UserRegistrationsSerilaizer(data = request.data)
        
        if not serializers.is_valid():
            return Response(serializers.errors,status=status.HTTP_406_NOT_ACCEPTABLE)
        
        try:
            username = serializers.validated_data['username']
            otp_username = OtpModel.objects.get(username = username)
            first_name = serializers.validated_data['first_name']
            last_name = serializers.validated_data['last_name']
            email = serializers.validated_data['email']
            mobile = serializers.validated_data['mobile']
            account_type = serializers.validated_data['account_type']
            password = serializers.validated_data['password']

            if (otp_username.isVerified == True):
                """ creates an user in the CustomUser Model """
                User = CustomUser.objects.create(
                    username = username,
                    first_name = first_name,
                    last_name = last_name,
                    email=email,
                    mobile=mobile,
                    password  = make_password(password),
                    account_type=account_type,
                    profile_pic = serializers.validated_data['profile_pic']
                )

                """ generates an jwt token for the user """
                access_token = RefreshToken.for_user(User)
                response ={
                    "user_id" : User.id,
                    "name" : User.first_name +" "+User.last_name,
                    "email" : User.email,
                    "mobile": User.mobile,
                    "access_token" : str(access_token.access_token),
                }
                otp_username.isVerified = False
                otp_username.save()
                return Response(response,status=status.HTTP_200_OK)
            else:
                response = {
                    "message" : "otp expired/not verified"
                }
                return Response(response,status=404)

        except:
            response = {
                "message" : "otp expired/not verified"
            }
            return Response(response,status=404)

        


