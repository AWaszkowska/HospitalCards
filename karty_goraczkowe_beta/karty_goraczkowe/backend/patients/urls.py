# keep all urls related to app in one place

from django.urls import path
from . import views

urlpatterns = [

    # not using funct based view atm
    path('', views.patient_list_create_view), # empty '' cuz otherwise we'll have api//
    path('<int:pk>/update/', views.patient_update_view),
    path('<int:pk>/delete/', views.patient_destroy_view),
    path('<int:pesel>/', views.patient_detail_view),
    path('', views.BodyTemperature_list_create_view), # empty '' cuz otherwise we'll have api//
    path('<int:pk>/update/', views.BodyTemperature_update_view),
    path('<int:pk>/delete/', views.BodyTemperature_destroy_view),
    path('<int:pk>/', views.BodyTemperature_detail_view),
]