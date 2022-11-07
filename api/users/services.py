from urllib import response
from rest_framework import status
from rest_framework.response import Response
from django.views import View
from rest_framework_simplejwt.tokens import RefreshToken
from api.Otp.models import OtpModel
from api.common.error_messages.custom_errors import UserNotFound, invalidCredentials, invalidOtp
from api.users.models import *
from rest_framework.response import Response

class UserServices(View):

    @staticmethod
    def verifyProfiles(data):
        username = data.get('username')
        grant_type = data.get('grant_type')
        password = data.get('password')
        try:
            user = CustomUser.objects.get(username=username)
            if (user and grant_type == "password"):
                is_verified = user.check_password(password)
                if is_verified:
                    access_token = RefreshToken.for_user(user)
                    result = {
                        "message": " authenticated successfully ",
                        "id": user.id,
                        "access_token": str(access_token.access_token)
                    }
                    return Response(result, status=status.HTTP_200_OK)
                else:
                    result = invalidCredentials()
                    return Response(result, status=status.HTTP_401_UNAUTHORIZED)
            elif (user and grant_type == "otp"):
                try:
                    otp_instance = OtpModel.objects.get(username=user.username)
                    is_otpVerified = otp_instance.isVerified
                    if is_otpVerified:
                        access_token = RefreshToken.for_user(user)
                        result = {
                            "message": " authenticated successfully ",
                            "id": user.id,
                            "access_token": str(access_token.access_token)
                        }
                        otp_instance.isVerified = False
                        otp_instance.save()
                        return Response(result, status=status.HTTP_200_OK)
                    else:
                        result = invalidOtp()
                        return Response(result, status=status.HTTP_401_UNAUTHORIZED)
                except:
                    result = {
                        "errors": "otp not initialize"
                    }
                    return Response(result, status=status.HTTP_400_BAD_REQUEST)
            else:
                result = {
                    "errors": "invalid grant_type"
                }
                return Response(result, status=status.HTTP_400_BAD_REQUEST)

        except CustomUser.DoesNotExist:
            result = UserNotFound()
            return Response(result, status=status.HTTP_404_NOT_FOUND)
        

    @staticmethod
    def save(data):
        username = data.get('username')
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        mobile = data.get('mobile')
        account_type = data.get('account_type')
        password = data.get('password')
        # profile_pic = data.get('profile_pic') 'to be added later : m2'
        try:
            otp_instance = OtpModel.objects.get(username = username)
            print(otp_instance)
            if otp_instance.isVerified:
                User = CustomUser.objects.create(
                    username=username,
                    first_name=first_name,
                    last_name=last_name,
                    email = email,
                    mobile = mobile,
                    password=make_password(password),
                    account_type=account_type
                )
                if (User.username[-4] == '.'):
                    User.email = username.lower()
                else:
                    User.mobile = username
                User.save()
                access_token = RefreshToken.for_user(User)
                response={
                    "message" :"user created",
                    "id" : User.id,
                    "username" : User.username,
                    "token" : str(access_token.access_token)
                }
                otp_instance.isVerified = False
                otp_instance.save()
                return Response(response, status=status.HTTP_201_CREATED)
            else:
                response={
                    "errors" : "otp not verified"
                }
                return Response(response, status=status.HTTP_401_UNAUTHORIZED)
        except:
            response ={
                "errors" : "otp not initialized"
            }
            return Response(response,status=status.HTTP_401_UNAUTHORIZED)
