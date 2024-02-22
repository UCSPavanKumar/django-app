from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.exceptions import AuthenticationFailed
from .models import User
# Create your views here.
class registerView(APIView):
    def post(self,request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
register_view = registerView.as_view()


class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('User Not Found')
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password')
        
        return Response({'message':'success'})

login_view = LoginView.as_view()