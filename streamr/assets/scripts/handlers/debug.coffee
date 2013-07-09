
# Assignment
numebr = 43
opposite = true

# Conditions
number = -42 if opposite

# Functions
square = ( x ) -> x * x

# Arrays
list = [ 1, 2, 3, 4 ]

# Objects
math =
    root:  Math.sqrt
    square: square
    cube: ( x ) -> x * square x

# Log
console.log 'Hello Coffee script'


#
# Interactions
# 	- User
#		- Login
#		- Register
#		- Show Profile
#
#	- Messages
#		- New messages
#
( ( window, $, view, controller, utils ) ->

	# Init
	User = Gillie.extend({	

		initialize: () ->
			console.log 'Hello Gillie'

		# Events
		events:
			'submit .login-page .login-form': 'login'

		# Login
		login: ( e ) ->
			e.preventDefault()
			data = $( e.currentTarget ).serializeArray()
			data = utils.mapFormInputs( data )
			console.log data

	})


	# Expose it globally
	window.App.Handlers.User = new User

)( this, jQuery, window.App.Views.User, window.App.Controllers.User, window.App.Helpers.Utilities )

