from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    
# Create your models here.
