from django.db import models
from django.contrib.auth.models import User
from django import forms
# Create your models here.class task(models.Model):
class Todo(models.Model):
    title = models.CharField(max_length=100)
    memo = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    datecompleted= models.DateTimeField(null=True,blank=True)
    important= models.BooleanField(default=False)
    user= models.ForeignKey(User , on_delete=models.CASCADE)

    def str(self):
        return self.title

class ContactForm(models.Model):
	name = models.CharField(max_length = 50)
	address = models.EmailField(max_length = 150)
	message = models.CharField (max_length = 2000)

