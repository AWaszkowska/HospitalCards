from django.db import models
from django.db.models import Q

# Create your models here.


# class PatientManager(models.Manager):
#     def get_queryset(self, *args, **kwargs):
#         return PatientQuerySet(self.model, using=self._db)
#     def search(self, query):
#         return self.get_queryset().search(query)

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

class Patient(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    birth_date = models.DateField()
    pesel = models.CharField(max_length=11)
    # creation_date = models.DateTimeField(auto_now_add=True)
    creation_date = models.DateField()

    GENDER_CHICES = (
        ('M', 'Mezczyzna'),
        ('K', 'Kobieta')
    )

    gender = models.CharField(max_length=1, choices=GENDER_CHICES)
    public = models.BooleanField(default=False)
    # objects = PatientManager()

    def __str__(self):
        return self()

class BodyTemperature(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    measurement = models.DecimalField(max_digits=4, decimal_places=2)
    measurement_date = models.DateField()

    def __str__(self):
        return self()


# class PatientQuerySet(models.QuerySet):
#     def is_public(self):
#         return self.filter(public=True)
#     def search(self, query, user=None):
#         lookup = Q(surname__icontains=query) | Q(pesel__icontains=query)
#         qs = self.is_public().filter(lookup)
#         return qs



# migrations: tell the database what changes are goin on

# pyth manage.py shell,  from products.models import Product, Product.objects.create(title='Hello world', content='this is amazing', price=0.00)
# python manage.py runserver 