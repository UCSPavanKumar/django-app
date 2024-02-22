from django.urls import path
from .views import * 
urlpatterns = [
    path('',home_view),
    path('login/',login_view),
    path('register/',register_view)
]