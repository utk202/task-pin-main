from django.urls import path
from django.contrib import admin
from main import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [path("login/", views.main_page, name='login'),
               path('', views.home, name='home'),
               path("signup/", views.signup, name='signup'),
               path("boiler/", views.boiler, name='boiler'),
               path("contact/", views.contact, name='contact'),
               path("tasklist/",views.tasklist, name='tasklist' ),
               path("tasklist/<str:s>/",views.tasklist, name='tasklist'),
               path("logout/", views.logout_user, name='logout'),
]
