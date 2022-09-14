from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager
from django.contrib.auth import password_validation
from django.contrib.auth.hashers import (
    check_password, is_password_usable, make_password,
)
import random

def upload_path(instance ,filename):
    return '/'.join(['images',str(instance.mobile),filename]) 

#customusernmanager
class CustomUserManager(BaseUserManager):
    def create_user (self,email,password,full_name,mobile, **extrafields):
        if not email:
            raise ValueError("Emal Not Provided")
        if not full_name:
            raise ValueError("Name Not Given")
        if not mobile:
            raise ValueError("mobile not given")
        
        user = self.model(
            email = self.normalize_email(email),
            full_name = full_name,
            mobile = mobile,
            **extrafields
        )
        # user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_admin = True
        user.is_superuser = True
        
        user.save(using=self._db)
        return user
    def create_superuser(self,email,password,full_name,mobile, **extrafields):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            email = self.normalize_email(email),
            full_name = full_name,
            password=password,
            mobile = mobile,
            **extrafields
        )
        user.set_password(password)
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

USER_CHOICES =(
    ("1", "USER"),
    ("2", "DELIVERYBOY"),
)

class CustomUser(AbstractBaseUser,PermissionsMixin):
    profile_pic = models.ImageField(
        default="",
        null = True,
        blank = True,
        upload_to = upload_path
    )
    full_name = models.CharField(
        max_length=15,
        blank=False
    )
    email = models.EmailField(
        db_index=True,
        unique=True,
        blank=False
    )
    mobile = models.IntegerField(
        blank= False,
        unique=True
    )
    account_type = models.CharField(
        max_length=50,
        choices=USER_CHOICES
    )
    is_staff = models.BooleanField(
        default=False
    )
    is_active = models.BooleanField(
        default=True
    )
    is_superuser = models.BooleanField(
        default=False
    )
    
    objects = CustomUserManager()


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =  ['full_name','mobile']
        
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'