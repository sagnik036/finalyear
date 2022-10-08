from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager
from django.contrib.auth import password_validation
from django.contrib.auth.hashers import (
    check_password, is_password_usable, make_password,
)
from django.utils.translation import gettext_lazy as _
import random

def upload_path(instance ,filename):
    return '/'.join(['images',str(instance.usernmae),filename]) 

#customusernmanager
class CustomUserManager(BaseUserManager):
    def create_user (self,username,password,first_name,last_name, email = None,**extrafields):
        if not username:
            raise ValueError("username Not Provided")
        if not first_name:
            raise ValueError("first_name Not Given")
        
        user = self.model(
            username = username,
            first_name = first_name,
            last_name = last_name,
            password=password,
            **extrafields
        )
        user.set_password(password)
        user.is_staff = True
        user.is_active = True
        user.is_admin = True
        user.is_superuser = True
        
        user.save(using=self._db)
        return user

    def create_superuser(self,username,password,first_name,last_name ,**extrafields):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        user = self.create_user(
            username = username,
            first_name = first_name,
            last_name = last_name,
            password=password,
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
    username = models.CharField(
        _('username'),
        max_length=150,
        unique=True,
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )
    first_name = models.CharField(
        max_length=15,
        blank=False
    )
    last_name = models.CharField(
        max_length=15,
        blank=False
    )
    email = models.EmailField(
        unique=True,
        blank=False
    )
    mobile = models.CharField(
        max_length=12,
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


    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS =  ['first_name','last_name','password','mobile','email']
        
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'