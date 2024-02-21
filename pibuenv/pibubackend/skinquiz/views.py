# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import QuizResult
import json

@csrf_exempt
def quiz_results_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Extract quiz data from the request
        skin_type = data.get('skin_type')
        age_range = data.get('age_range')
        concerns = data.get('concerns')
        budget = data.get('budget')
        personal_values = data.get('personal_values')
        allergies = data.get('allergies')
        lifestyle = data.get('lifestyle')
        skincare_routine = data.get('skincare_routine')
        
        # Process and save the quiz data
        quiz_result = QuizResult.objects.create(
            skin_type=skin_type,
            age_range=age_range,
            concerns=concerns,
            budget=budget,
            personal_values=personal_values,
            allergies=allergies,
            lifestyle=lifestyle,
            skincare_routine=skincare_routine
            # Add more fields as needed
        )
        # Return a JSON response indicating success
        return JsonResponse({'message': 'Quiz results saved successfully'})
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
