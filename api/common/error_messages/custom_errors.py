from http.client import responses
from rest_framework import status


"""user not found errors"""

def UserNotFound():
    response = {
        "errors": "invalid username"
    }
    return (response)

def invalidCredentials():
    response = {
        "errors": "invalid_credentials"
    }
    return (response)

def invalidOtp():
    response = {
        "errors": "invalid otp / otp expired"
    }
    return (response)