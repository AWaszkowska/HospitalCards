from rest_framework import serializers
from .models import BodyTemperature

class BodyTemperatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BodyTemperature
        fields = [
            'pesel',
            'measurement',
            'measurement_date',
        ]