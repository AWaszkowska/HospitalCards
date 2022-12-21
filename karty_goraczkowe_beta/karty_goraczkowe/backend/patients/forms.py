from django import forms

from .models import Patient
from .models import BodyTemperature

class PatientsForm(forms.ModelForm):
    class Meta:
        model = Patient
        fields = [
            'name',
            'surname',
            'birthdate',
            'pesel',
            'creation_date',
            'gender',
        
        ]

class BodyTemperatureForm(forms.ModelForm):
    class Meta:
        model = BodyTemperature
        fields = [
            'patient_id',
            'measurement',
            'measurement_date',
        ]