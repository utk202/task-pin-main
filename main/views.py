from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User, auth
from django.contrib.auth import logout, authenticate, login
from django.contrib import messages
from django.utils import timezone
from datetime import date, timedelta
from django.db import IntegrityError
from .models import Todo
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings

activetab="ActiveTasks"
show="show"
def main_page(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('tasklist')
        else:
            messages.info(request, user)
            return render(request, 'login.html', {'error': 'Username and password did not match'})

    else:
        return render(request, 'login.html')


def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(
                    request.POST['username'], password=request.POST['password1'], email=request.POST['email'])
                user.save()
                print('user created')
                auth.login(request, user)
                return redirect('tasklist')
            except IntegrityError:
                return render(request, 'signup.html', {'error': 'User already exists'})
        else:
            return render(request, 'signup.html', {'error': 'Passwords did not match'})
    else:
        return render(request, 'signup.html')


def boiler(request):
    return render(request)


def home(request):
    return render(request, 'index.html')


def contact(request):
    if request.method=='POST':
        subject = "Website Inquiry"
        message="Name: "+request.POST.get('name')+"\n"
        message=message+"Email: "+request.POST.get('email')+"\n"
        message=message+"Message: "+request.POST.get('message')+"\n"+"\n"+"\n"+"\n"
        message=message+"This is an auto generated email. Do not reply to this email."+"\n"
        email_from = settings.EMAIL_HOST_USER
        send_mail(subject, message, email_from, ['taskpin1@gmail.com'])
    return render(request, 'contact.html')

def tasklist(request,s="pending"):
    # if request.method=="POST":
    if request.user.is_anonymous:
        return render(request,'login.html')
    elif request.method == 'POST':
        url="/tasklist/"+s
        if request.POST.get("delete"):
            t=Todo.objects.get(id=request.POST.get('delete'))
            t.delete()
        elif request.POST.get("important"):
            t=Todo.objects.get(id=request.POST.get('important'))
            t.important=True
            t.save()
        elif request.POST.get("completed"):
            t=Todo.objects.get(id=request.POST.get('completed'))
            t.datecompleted=timezone.now()
            t.save()
        elif request.POST.get("save"):
            userdetails=User.objects.get(username=request.user)
            t=Todo(title=request.POST['ultratitle'],memo=request.POST['memo'],created=request.POST['date'],user=userdetails)
            t.save()
        elif request.POST.get("unimportant"):
            t=Todo.objects.get(id=request.POST.get('unimportant'))
            t.important=False
            t.save()
        elif request.POST.get("pending"):
            t=Todo.objects.get(id=request.POST.get('pending'))
            t.datecompleted=None
            t.save()
        elif request.POST.get("edit"):
            t=Todo.objects.get(id=request.POST.get('edit'))
            t.title=request.POST.get('title')
            t.memo=request.POST.get('desc')
            t.created=request.POST.get('dat')
            t.save()
        return redirect(url)
            

    else:
        als = Todo.objects.filter(user__username=request.user)
        pls = Todo.objects.filter(user__username=request.user,datecompleted__isnull=True)
        clist = Todo.objects.filter(user__username=request.user,datecompleted__isnull=False).order_by('-datecompleted')
        ils = Todo.objects.filter(user__username=request.user,important=True,datecompleted__isnull=True)

        showall=""
        listall=""
        showpending=""
        listpend=""
        showcompleted=""
        listcomp=""
        showimportant=""
        listimp=""
        if s=="all":
            showall=activetab
            listall=show
        elif s=="completed":
            listcomp=show
            showcompleted=activetab
        elif s=="important":
            showimportant=activetab
            listimp=show
        elif s=="pending":
            showpending=activetab
            listpend=show
        return render(request,'viewtodo.html',{'alist':als,'clist':clist,'plist':pls,'ilist':ils,'username':request.user,'disall':showall,'disimp':showimportant,'discomp':showcompleted,'dispend':showpending,'listall':listall,'listimp':listimp,'listpend':listpend,'listcomp':listcomp})

def logout_user(request):
        logout(request)
        messages.success(request,"You have successfully logged out")
        return render(request,'index.html')



