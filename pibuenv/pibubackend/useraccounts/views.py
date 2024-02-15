from django.http import JsonResponse
from django.views.generic import View
from django.contrib.auth import authenticate

class LoginView(View):
    def post(self, request, *args, **kwargs):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            # User is authenticated
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)


class CreateUserView(View):
    def post(self, request, *args, **kwargs):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'User created successfully'})
        else:
            return JsonResponse({'error': form.errors}, status=400)
