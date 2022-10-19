from http.client import responses
from rest_framework import status


"""user not found errors"""

def UserNotFound():
    response = {
        "errors": [
            {
                "user_not_found": "user not found"
            }
        ]
    }
    return (response)

def invalidCredentials():
    response = {
        "errors": [{"invalid_password":"check your password"}]
    }
    return (response)

def invalidOtp():
    response = {
        "errors": [{"invalid_otp":"invalid_otp"}]
    }
    return (response)