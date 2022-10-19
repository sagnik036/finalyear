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
