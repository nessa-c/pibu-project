from django.urls import path
from . import views

urlpatterns = [
    path('', views.quiz_results_view, name='skinquiz'),  # Example URL for a quiz form\
    path('<int:id>/', views.quiz_results.as_view(), name='get-results'),  # Example URL for a quiz form
]