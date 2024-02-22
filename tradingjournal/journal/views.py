from typing import Any
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
# Create your views here.
class HomeView(View):
    def get(self,request):
        return render(request,'journal/home.html',{'data':range(1,10),'title':'Home'})
    
home_view = HomeView.as_view()

class LoginView(View):
    def get(self,request):
        return render(request,'journal/login.html',{'title':'Login'})
    
login_view = LoginView.as_view()


class RegisterView(View):
    def get(self,request):
        return render(request,'journal/register.html',{'title':'Sign Up'})
    
register_view = RegisterView.as_view()