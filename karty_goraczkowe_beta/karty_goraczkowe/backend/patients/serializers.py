from rest_framework import serializers

from .models import Patient
from .models import BodyTemperature

class PatientSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Patient
        fields = [
            'name',
            'surname',
            'birth_date',
            'pesel',
            'creation_date',
            'gender',
        ]

class BodyTemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BodyTemperature
        fields = [
            'patient_id',
            'measurement',
            'measurement_date',
        ]

    # def get_sense_of_life(self, obj): # dunno what dat for
    #     if not hasattr(obj, 'id'):
    #         return None
    #     if not isinstance(obj, Patient):
    #         return None
    #     return obj.get_discount()
        