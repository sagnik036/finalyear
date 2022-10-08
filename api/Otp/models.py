from django.db import models

""" username otp model """
class OtpModel(models.Model):
    username = models.CharField(max_length =50,blank=False)
    isVerified = models.BooleanField(blank=False, default=False)
    counter = models.IntegerField(default=0, blank=False)

    def __str__(self):
        return self.username


