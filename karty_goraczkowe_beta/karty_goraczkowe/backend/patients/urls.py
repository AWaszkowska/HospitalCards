# keep all urls related to app in one place

from django.urls import path
from . import views

urlpatterns = [

    # not using funct based view atm
    path('', views.patient_list_create_view), # empty '' cuz otherwise we'll have api//
    path('<int:pesel>/update/', views.patient_update_view),
    path('<int:pesel>/delete/', views.patient_destroy_view),
    path('<int:pesel>/', views.patient_detail_view),

]
