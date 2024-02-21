# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import QuizResult
from django.views import View
import json

@csrf_exempt
def quiz_results_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Extract quiz data from the request
        id = data.get('id')
        skin_type = data.get('skin_type')
        concerns = data.get('concerns')
        budget = data.get('budget')
        personal_values = data.get('personal_values')
        allergies = data.get('allergies')
        lifestyle = data.get('lifestyle')
        skincare_routine = data.get('skincare_routine')
        
        # Process and save the quiz data
        quiz_result = QuizResult.objects.create(
            id=id,
            skin_type=skin_type,
            concerns=concerns,
            budget=budget,
            personal_values=personal_values,
            allergies=allergies,
            lifestyle=lifestyle,
            skincare_routine=skincare_routine
            # Add more fields as needed
        )
        # Return a JSON response indicating success
        return JsonResponse({'id': quiz_result.id, 'message': 'Quiz results saved successfully'})
    else:
        # Handle other HTTP methods if needed
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

class quiz_results(View):
    def get(self, request, id, *args, **kwargs):
        try:
            results = QuizResult.objects.get(id=id)
            data = {
                "id": results.id, 
                "skin_type": results.skin_type,
                "concerns": results.concerns,
                "budget": results.budget,
                "personal_values": results.personal_values,
                "allergies": results.allergies,
                "lifestyle": results.lifestyle,
                "skincare_routine": results.skincare_routine
            }
            return JsonResponse(data)
        except QuizResult.DoesNotExist:
            return JsonResponse({"error": "Quiz Results not found"}, status=404)