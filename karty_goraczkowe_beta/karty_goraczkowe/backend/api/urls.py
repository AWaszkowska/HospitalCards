# where all of my django project api urls are
from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from . import views

urlpatterns = [
    path('auth/', obtain_auth_token), # endpoint for users to request an authentication token usin their username and pass
    path('', views.api_home), # localhost 8000
    path('', views.api_doc), # localhost 8000
    

]