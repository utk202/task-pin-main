from django.db import models
from django.contrib.auth.models import User
# Create your models here.class task(models.Model):
class task(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    title=models.CharField(max_length=20)
    description=models.TextField(blank=True)
    time=models.DateTimeField()
