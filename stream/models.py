# Main models for the application
from django.db import models

# Native users model
from django.contrib.auth.models import User


# Messages model
# class Messages( models.Model ):
#     author = models.ForeignKey( User )
#     content = models.TextField()
#     pub_date = models.DateTimeField()

#     def __unicode( self ):
#         return self.content


