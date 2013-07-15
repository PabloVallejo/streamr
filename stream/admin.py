# Admin
from django import forms
from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin
from stream.models import Message
# from django.contrib.auth.forms import

from stream.models import UserMeta


# Show messages in admin
admin.site.register( Message )

