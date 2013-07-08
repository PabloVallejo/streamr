# Stream views
from django.shortcuts import render_to_response, render
from django.template import RequestContext


# Home View
def home( request ):

    # Is user logged in?
    if request.user.is_authenticated():
        return render( request, 'login.html', {} )
        # return render( request, 'home.html', {} )

    return render( request, 'login.html', {} )


# CSS Tests
def css_tests( request ):
    return render( request, 'css-tests.html', {} )

