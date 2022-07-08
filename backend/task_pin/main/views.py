from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User, auth
from django.contrib.auth import logout,authenticate,login
from django.contrib import messages
from datetime import date,timedelta

def main_page(request):
  return render(request,'login.html')

def boiler(request):
  return render(request)

def signup(request):
  if request.method == 'POST':
    name=request.POST['name']
    email=request.POST['email']
    password1=request.POST['password']
    password2=request.POST['confirm-password']
    
    user=User.objects.create_user(name=name,username=id,password=password1, email=email)
    user.save();
    print('user created')
    return redirect('')
  else:
    return render(request, 'signup.html')