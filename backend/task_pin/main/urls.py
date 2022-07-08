from django.urls import path
from django.contrib import admin
from main import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns =[path("", views.main_page, name='main_page'),
path("/signup", views.signup, name='signup'),
path("/boiler", views.boiler, name='boiler'),
]
