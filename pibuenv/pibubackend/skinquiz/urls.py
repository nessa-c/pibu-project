from django.urls import path
from . import views

urlpatterns = [
    path('', views.quiz_results_view, name='skinquiz'),  # Example URL for a quiz form
]