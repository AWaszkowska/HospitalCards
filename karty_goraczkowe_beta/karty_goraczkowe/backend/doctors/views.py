from django.shortcuts import render
from rest_framework import generics, mixins, permissions, authentication
from .models import Doctor
from .serializers import DoctorSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
# Create your views here.

class DoctorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    name = 'Lekarze'
    filter_fields = (
        'password',
        'username',
    )
    ordering_fields = (
        'surname',
    )


    # assign smth to the data
    def perform_create(self, serializer):
        serializer.save()
        print(serializer.validated_data)
        name = serializer.validated_data.get('name')
        surname = serializer.validated_data.get('surname')
        username = serializer.validated_data.get('birt_date')
        password = serializer.validated_data.get('password')


doctor_list_create_view = DoctorListCreateAPIView.as_view()

class DoctorDetailAPIView(generics.RetrieveAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    # lookup_field = 'pk'
    lookup_field = 'username'

doctor_detail_view = DoctorDetailAPIView.as_view()

class DoctorUpdateAPIView(generics.UpdateAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = 'username'

    def perform_update(self, serializer):
        instance = serializer.save() # identical to serializer.save frm list_create
        

doctor_update_view = DoctorUpdateAPIView.as_view()

class DoctorDestroyAPIView(generics.DestroyAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = 'username'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

doctor_destroy_view = DoctorDestroyAPIView.as_view()