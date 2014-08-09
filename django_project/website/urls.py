from django.conf.urls import patterns, include, url


urlpatterns = patterns('',    
    url(r'^$', 'website.views.home', name='home'),
    url(r'^info/$', 'website.views.info', name='info'),
    url(r'^track-me/$', 'website.views.track_me', name='track-me'),
)
