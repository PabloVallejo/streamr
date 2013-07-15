from django.conf.urls import patterns, include, url
from stream.views import home, css_tests, login_handle, update_status

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',


    # Examples:
    # url(r'^$', 'streamr.views.home', name='home'),
    # url(r'^streamr/', include('streamr.foo.urls')),


    # Home
    url( r'$^', home ),

    # CSS Tests
    url( r'^css-tests/?$', css_tests ),

    # Login
    url( r'^login/?$', login_handle ),

    # Status update
    url( r'^status/?$', update_status ),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
