from django.urls import path
from . import views

urlpatterns = [
    path('', views.doctor_list_create_view), # empty '' cuz otherwise we'll have api//
    path('<int:username>/update/', views.doctor_update_view),
    path('<int:username>/delete/', views.doctor_destroy_view),
    path('<int:username>/', views.doctor_detail_view),
]