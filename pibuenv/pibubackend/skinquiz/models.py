# models.py
from django.db import models

class QuizResult(models.Model):
    skin_type = models.CharField(max_length=100)
    age_range = models.CharField(max_length=100)
    concerns = models.JSONField()  # Store list of concerns as JSON
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    personal_values = models.JSONField()  # Store list of personal values as JSON
    allergies = models.JSONField()  # Store list of allergies as JSON
    lifestyle = models.JSONField()  # Store list of lifestyle choices as JSON
    skincare_routine = models.JSONField()  # Store list of skincare routine preferences as JSON
    
    # Add more fields as needed

    def __str__(self):
        return f"QuizResult - Skin Type: {self.skin_type}, Age Range: {self.age_range}"
