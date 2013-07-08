from django.conf.urls import patterns, include, url
from stream.views import home, css_tests

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


    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
