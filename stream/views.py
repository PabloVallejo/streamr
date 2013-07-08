# Stream views
from django.shortcuts import render_to_response, render
from django.template import RequestContext
from django.http import HttpResponseRedirect, HttpResponse


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


# Login
def login( request ):
    return render( request, 'css-tests.html', {} )

# def contact( request ):
#     errors = []
#     if request.method == 'POST':
#         if not request.POST.get( 'subject', '' ):
#             errors.append( 'Enter a subject.' )
#         if not request.POST.get( 'message', '' ):
#             errors.append( 'Enter a message.' )
#         if request.POST.get( 'email' ) and '@' not in request.POST[ 'email' ]:
#             errors.append('Enter a valid e-mail address.')
#         if not errors:
#             send_mail(
#                 request.POST['subject'],
#                 request.POST['message'],
#                 request.POST.get('email', 'noreply@example.com'),
#                 ['siteowner@example.com'],
#             )
#             return HttpResponseRedirect( '/contact/thanks/' )
#     return render(request, 'contact_form.html',
#         { 'errors': errors })

