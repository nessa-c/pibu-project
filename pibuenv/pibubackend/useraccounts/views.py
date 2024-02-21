from django.http import JsonResponse
from django.views.generic import View
from django.contrib.auth import authenticate
import json

class LoginView(View):
    def post(self, request, *args, **kwargs):
        # Retrieve JSON data from the request body
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        
        # Authenticate user
        user = authenticate(username=username, password=password)
        
        if user is not None:
            # User is authenticated
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)
