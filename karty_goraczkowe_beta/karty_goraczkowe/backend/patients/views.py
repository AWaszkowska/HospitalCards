from rest_framework import generics, mixins, permissions, authentication
from .models import Patient
from .models import BodyTemperature
from .serializers import PatientSerializer
from .serializers import BodyTemperatureSerializer
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


patient_list_create_view = PatientListCreateAPIView.as_view()

class PatientDetailAPIView(generics.RetrieveAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'pk'

patient_detail_view = PatientDetailAPIView.as_view()

class PatientUpdateAPIView(generics.UpdateAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'pk'

    def perform_update(self, serializer):
        instance = serializer.save() # identical to serializer.save frm list_create
        

patient_update_view = PatientUpdateAPIView.as_view()

class PatientDestroyAPIView(generics.DestroyAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

patient_destroy_view = PatientDestroyAPIView.as_view()




    
class BodyTemperatureListCreateAPIView(generics.ListCreateAPIView):
    
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer

    name = 'Temperatura Ciała'
    filter_fields = (
        'measurement_date',
    )
    ordering_fields = (
        'measurement_date',
    )

    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]


    # assign smth to the data
    def perform_create(self, serializer):
        #serializer.save(user=self.request.user)
        print(serializer.validated_data)
        patient_id = serializer.validated_data.get('patient_id')
        measurement = serializer.validated_data.get('measurement')
        measurement_date = serializer.validated_data.get('measurement_date')
        

BodyTemperature_list_create_view = BodyTemperatureListCreateAPIView.as_view()

class BodyTemperatureDetailAPIView(generics.RetrieveAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer
    lookup_field = 'pk'

BodyTemperature_detail_view = BodyTemperatureDetailAPIView.as_view()

class BodyTemperatureUpdateAPIView(generics.UpdateAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer
    lookup_field = 'pk'

    def perform_update(self, serializer):
        instance = serializer.save() # identical to serializer.save frm list_create
        

BodyTemperature_update_view = BodyTemperatureUpdateAPIView.as_view()

class BodyTemperatureDestroyAPIView(generics.DestroyAPIView):
    # authentication_classes = [authentication.BaseAuthentication]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = BodyTemperature.objects.all()
    serializer_class = BodyTemperatureSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

BodyTemperature_destroy_view = BodyTemperatureDestroyAPIView.as_view()


# this is a function based view but we're usin a generic one

# @api_view(['GET', 'POST'])
# # function based view
# def product_alt_view(request, pk=None, *args, **kwargs):
#     #distinguishing things based on method
#     method = request.method

#     if method == "GET":
#         if pk is not None:
#             # assume its a detail view, else its a list view but no need for usin else
#             obj = get_object_or_404(Product, pk=pk)
#             data = ProductSerializer(obj, many=False).data
#             return Response(data)

#         #url_args
#         # get request -> detail view (has to do wth pk (primary key arguments))


#         # list view
#         queryset = Product.objects.all()
#         data = ProductSerializer(queryset, many=True).data # serializing our query
#         return Response(data)
#     if method == "POST":
#         # create an item
        
#         serializer = ProductSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             title = serializer.validated_data.get('title')
#             content = serializer.validated_data.get('content') or None
        
#             if content is None:
#                 content = title
#             serializer.save(content=content)
        
#             return Response(serializer.data) # json accepts dictionary argument
#         return Response({"invalid": "not valid data"}, status=400)
