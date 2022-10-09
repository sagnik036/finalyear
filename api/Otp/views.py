from datetime import datetime
from urllib import response
from django.core.exceptions import ObjectDoesNotExist
import pyotp
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from .models import *
import base64
from api.models import *
from twilio.rest import Client
from myproject import settings 


# This class returns the string needed to generate the key
class generateKey:
    @staticmethod
    def returnValue(username):
        return str(username) + str(datetime.date(datetime.now())) + "Some Random Secret Key"

class getUsernameNumberRegistered(APIView):
    # Get to Create a call for OTP
    @staticmethod
    def get(request,username):
        try:
            usernames = OtpModel.objects.get(username=username)
            print(usernames) # if Mobile already exists the take this else create New One
        except ObjectDoesNotExist:
            OtpModel.objects.create(
                username=username,
            )
        usernames = OtpModel.objects.get(username=username)  # user Newly created Model
        usernames.counter += 1  # Update Counter At every Call
        usernames.isVerified = False
        usernames.save()  # Save the data
        keygen = generateKey()
        key = base64.b32encode(keygen.returnValue(usernames).encode())  # Key is generated
        OTP = pyotp.HOTP(key)  # HOTP Model for OTP is created
        print(OTP.at(usernames.counter))
        
        """ twilio authentication """

        account_sid = settings.account_sid 
        auth_token = settings.auth_token
        client = Client(account_sid, auth_token) 
        message = client.messages.create(  
            messaging_service_sid=settings.msg_id,
            body=OTP.at(usernames.counter),  
            to='+91'+username
        ) 
        print(message.sid)
        return Response({"message": f"otp sent to {usernames}"}, status=200)  # Just for demonstration

    # This Method verifies the OTP
    @staticmethod
    def post(request,username):
        
        try:
            usernames = OtpModel.objects.get(username=username)
        except ObjectDoesNotExist:
            return Response("User does not exist", status=404)  # False Call

        keygen = generateKey()
        key = base64.b32encode(keygen.returnValue(usernames).encode())  # Generating Key
        OTP = pyotp.HOTP(key)  # HOTP Model
        if OTP.verify(request.data["otp"], usernames.counter):  # Verifying the OTP
            usernames.isVerified = True
            usernames.save()
            return Response("You are authorised", status=200)
        return Response("OTP is wrong", status=400)