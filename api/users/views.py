from rest_framework.response import Response
from .serializers import *
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework import status
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.

class UserView(APIView):
    """ registers/authenticates user and return and jwt token """
    
    """ it authenticates user and returns jwt token """
    def get(self,request):
        serializers = UserAuthenticationSerializer(data = request.data)
       
        if not serializers.is_valid():
            return Response(serializers.errors,status=status.HTTP_406_NOT_ACCEPTABLE)
        
        """ checks wheater a valid user is present or not """
        try:
            User = CustomUser.objects.get(email = serializers.validated_data['email'])
            if User.check_password(serializers.data['password']):
                    access_token = RefreshToken.for_user(User)
                    response ={
                    "message" : " authenticated successfully ",
                    "id" : User.id,
                    "email" : User.email,
                    "mobile" : User.mobile,
                    "account_type" : User.account_type,
                    "access_token": str(access_token.access_token),
                    }
                    return Response(response,status=200)
            else:
                response = {
                    "message" : "check your password",
                }
                return Response(response,status.HTTP_406_NOT_ACCEPTABLE)
        except:
            response = {
                "message" : "no valid user found",
            }
            return Response(response,status=status.HTTP_404_NOT_FOUND)
        
    """ it registers user and returns an jwt token for further authentication """
    def post(self,request):
        serializers = UserRegistrationsSerilaizer(data = request.data)
        
        if not serializers.is_valid():
            return Response(serializers.errors,status=status.HTTP_406_NOT_ACCEPTABLE)
        
        """ this is storing all the data that it recieves """
        full_name = serializers.validated_data['full_name']
        email = serializers.validated_data['email']
        mobile = serializers.validated_data['mobile']
        account_type = serializers.validated_data['account_type']
        password = serializers.validated_data['password']

        """ creates an user in the CustomUser Model """
        User = CustomUser.objects.create(
                full_name=full_name,
                email=email,
                mobile=mobile,
                password  = make_password(password),
                account_type=account_type
        )

        """ generates an jwt token for the user """
        access_token = RefreshToken.for_user(User)
        response ={
            "user_id" : User.id,
            "full_name" : User.full_name,
            "email" : User.email,
            "mobile": User.mobile,
            "access_token" : str(access_token.access_token),
        }
        return Response(response,status=status.HTTP_200_OK)


