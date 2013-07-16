# Stream views
from django.shortcuts import render_to_response, render
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse
from stream.forms import LoginForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from stream.models import Message
import json, re


# Home View
def home( request ):

    # Is user logged in?
    if request.user.is_authenticated():
        return render( request, 'home.html', {} )

    return render( request, 'login.html', {} )


# CSS Tests
def css_tests( request ):
    return render( request, 'css-tests.html', {} )


# Login
def login_handle( request ):

	if request.method == 'POST':
		data = request.POST.get( 'creds' )
		data = json.loads( data )
		form = LoginForm( data )


		if form.is_valid():

			if request.user.is_authenticated():
				return HttpResponse( json.dumps( { 'status': 200, 'data': { 'logged_in': True } } ) )

			else:
				user = authenticate( username = data[ 'username' ], password = data[ 'password' ] )
				if user is not None:
					if user.is_active:
						login( request, user )
						return HttpResponse( json.dumps( { 'status': 200, 'data': { 'logged_in': True } } ) )

					else:
						return HttpResponse( json.dumps( { 'status': 600, 'data': { 'logged_in': True, 'error_text': 'User is not active' } } ) )
				else:
					return HttpResponse( json.dumps( { 'status': 600, 'data': { 'logged_in': False, 'error_text': 'Either your username or password is incorrect.' } } ) )

		else:
			return HttpResponse( json.dumps( { 'status': 600, 'data': { 'logged_in': False, 'error_text': 'Invalid form data' } } ) )


	else:
		return HttpResponse( 'Invalid HTTP method.' )


# Update status
def update_status( request ):

	if not request.method == 'POST':
		response = json.dumps( { 'status': 600, 'data': { 'error_text': 'Invalid requets method.' } } )
		return HttpResponse( response )

	if not request.user.is_authenticated():
		response = json.dumps( { 'status': 600, 'data': { 'error_text': 'You are not logged in' } } )
		return HttpResponse( response )

	# Get data
	data = request.POST.get( 'status' )
	if data is None:
		response = json.dumps( { 'status': 600, 'data': { 'error_text': 'Not data was received' } } )
		return HttpResponse( response )

	data = json.loads( data )

	try:
		author = User.objects.get( username = request.user )
	except Exception, e:
		return HttpResponse( 'Invalid' )


	# Create object
	message = Message(
		author = author,
		content = data[ 'content' ]
	)

	# Save message
	message.save()

	data = {
		'content': data[ 'content' ],
		'full_name': author.first_name + ' ' + author.last_name
	}

	name_parts = re.findall( '\w+', data[ 'full_name' ] )
	if len( name_parts ) < 1:
		data[ 'full_name' ] = 'Unknown Name'

	response = json.dumps( { 'status': 200, 'data': data } )
	return HttpResponse( response )