from django.db import models
from django.db.models import Q
# from patients.models import Patient

class BodyTemperature(models.Model):
    # pesel zamiast id
    # pesel = models.ForeignKey(Patient, on_delete=models.CASCADE)
    pesel = models.CharField(max_length=11)
    measurement = models.DecimalField(max_digits=4, decimal_places=2)
    measurement_date = models.DateField()

    def __str__(self):
        return self()
    
