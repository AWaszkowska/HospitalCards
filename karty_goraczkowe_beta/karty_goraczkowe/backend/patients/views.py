from rest_framework import generics, mixins, permissions, authentication
from .models import Patient
# from .models import Doctor
from .serializers import PatientSerializer
# from .serializers import DoctorSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

class PatientListCreateAPIView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    name = 'Wszyscy Pacjenci'
    filter_fields = (
        'pesel',
        'surname',
        'creation_date',
    )
    ordering_fields = (
        'creation_date',
        'surname',
    )


    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]


    # assign smth to the data
    def perform_create(self, serializer):
        serializer.save()
        print(serializer.validated_data)
        name = serializer.validated_data.get('name')
        surname = serializer.validated_data.get('surname')
        birth_date = serializer.validated_data.get('birt_date')
        pesel = serializer.validated_data.get('pesel')
        creation_date = serializer.validated_data.get('creation_date')
        gender = serializer.validated_data.get('gender')
        body_temp = serializer.validated_data.get('body_temp')


patient_list_create_view = PatientListCreateAPIView.as_view()

class PatientDetailAPIView(generics.RetrieveAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    # lookup_field = 'pk'
    lookup_field = 'pesel'

patient_detail_view = PatientDetailAPIView.as_view()

class PatientUpdateAPIView(generics.UpdateAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'pesel'

    def perform_update(self, serializer):
        instance = serializer.save() # identical to serializer.save frm list_create
        

patient_update_view = PatientUpdateAPIView.as_view()

class PatientDestroyAPIView(generics.DestroyAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'pesel'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

patient_destroy_view = PatientDestroyAPIView.as_view()




    




