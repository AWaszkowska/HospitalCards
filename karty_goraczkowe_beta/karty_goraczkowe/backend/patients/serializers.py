from rest_framework import serializers

from .models import Patient
# from .models import Doctor

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

# class BodyTemperatureSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BodyTemperature
#         fields = [
#             'pesel',
#             'measurement',
#             'measurement_date',
#         ]

# class DoctorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Doctor
#         fields = [
#             'name',
#             'surname',
#             'username',
#             'password',
#         ]

    # def get_sense_of_life(self, obj): # dunno what dat for
    #     if not hasattr(obj, 'id'):
    #         return None
    #     if not isinstance(obj, Patient):
    #         return None
    #     return obj.get_discount()
        