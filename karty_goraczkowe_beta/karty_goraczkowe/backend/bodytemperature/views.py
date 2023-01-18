from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import generics
from .models import BodyTemperature
from .serializers import BodyTemperatureSerializer

class BodyTemperatureListCreateAPIView(generics.ListCreateAPIView):
    
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer

    name = 'Temperatura Ciała'
    filter_fields = (
        'pesel',
    )
    
    # assign smth to the data
    def perform_create(self, serializer):
        serializer.save()
        #serializer.save(user=self.request.user)
        print(serializer.validated_data)
        pesel = serializer.validated_data.get('pesel')
        measurement = serializer.validated_data.get('measurement')
        measurement_date = serializer.validated_data.get('measurement_date')
        

bodytemp_list_create_view = BodyTemperatureListCreateAPIView.as_view()

class BodyTemperatureDetailAPIView(generics.RetrieveAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer
    lookup_field = 'pesel'

bodytemp_detail_view = BodyTemperatureDetailAPIView.as_view()

class BodyTemperatureUpdateAPIView(generics.UpdateAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer
    lookup_field = 'pesel'

    def perform_update(self, serializer):
        instance = serializer.save() # identical to serializer.save frm list_create
        

bodytemp_update_view = BodyTemperatureUpdateAPIView.as_view()

class BodyTemperatureDestroyAPIView(generics.DestroyAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer
    lookup_field = 'pesel'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

bodytemp_destroy_view = BodyTemperatureDestroyAPIView.as_view()