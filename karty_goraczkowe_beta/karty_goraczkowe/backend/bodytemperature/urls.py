from django.urls import path
from . import views

urlpatterns = [
    path('', views.bodytemp_list_create_view), # empty '' cuz otherwise we'll have api//
    path('<int:pesel>/update/', views.bodytemp_update_view),
    path('<int:pesel>/delete/', views.bodytemp_destroy_view),
    path('<int:pesel>/', views.bodytemp_detail_view),
]