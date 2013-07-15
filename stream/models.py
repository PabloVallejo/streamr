# Main models for the application
from django.db import models

# Native users model
from django.contrib.auth.models import User


# Messages model
class Message( models.Model ):
    author = models.ForeignKey( User )
    content = models.TextField()
    pub_date = models.DateTimeField( auto_now_add = True, blank = True )

    def __unicode( self ):
        return self.content


# User metadata
class UserMeta( models.Model ):
	user = models.ForeignKey( User )
	profile_image = models.URLField()

	def __unicode__( self ):
		return self.user.first_name
