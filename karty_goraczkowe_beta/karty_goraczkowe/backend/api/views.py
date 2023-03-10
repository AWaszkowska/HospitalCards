#from django.shortcuts import render
from django.http import JsonResponse
# to convert from python dictionary
import json
from patients.models import Patient
from bodytemperature.models import BodyTemperature
from doctors.models import Doctor
from django.forms.models import model_to_dict
from rest_framework.response import Response
from rest_framework.decorators import api_view
from patients.serializers import PatientSerializer
from bodytemperature.serializers import BodyTemperatureSerializer
from doctors.serializers import DoctorSerializer
# Create your views here.
# echo back data that client is sending

@api_view (["GET", "POST"])
def api_home(request, *args, **kwargs):
    # request -> HttpRequest class -> Django
    
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        instance = serializer.save()
        # take model instance, turn a pyth dict, return json to client
        # data = model_to_dict(instance, fields=['id', 'title', 'price', 'sale_price'])
        print(serializer.data)
        
        return Response(serializer.data) # json accepts dictionary argument
    return Response({"invalid": "not valid data"}, status=400)

@api_view (["GET", "POST"])
def api_doc(request, *args, **kwargs):
    serializer = DoctorSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        instance = serializer.save()
        # take model instance, turn a pyth dict, return json to client
        # data = model_to_dict(instance, fields=['id', 'title', 'price', 'sale_price'])
        print(serializer.data)
        
        return Response(serializer.data) # json accepts dictionary argument
    return Response({"invalid": "not valid data"}, status=400)

@api_view (["GET", "POST"])
def api_temp(request, *args, **kwargs):
    # request -> HttpRequest class -> Django
    
    serializer = BodyTemperatureSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        instance = serializer.save()
        # take model instance, turn a pyth dict, return json to client
        # data = model_to_dict(instance, fields=['id', 'title', 'price', 'sale_price'])
        print(serializer.data)
        
        return Response(serializer.data) # json accepts dictionary argument
    return Response({"invalid": "not valid data"}, status=400)