from django.db import models

class ListProduct(models.Model):
    productID = models.IntegerField()

class RoutineProduct(models.Model):
    productID = models.IntegerField()

class SkincareQuizAnswers(models.Model):
    skinType = models.CharField(choices=[('Normal', 'Normal'), ('Dry', 'Dry'), ('Oily', 'Oily'), ('Sensitive', 'Sensitive'), ('Combination', 'Combination')], max_length=50)
    ageRange = models.CharField(choices=[('Prefer Not to Say', 'Prefer Not to Say'), ('20s', '20s'), ('30s', '30s'), ('40s', '40s'), ('50s', '50s'), ('60s', '60s'), ('70s+', '70s+')], max_length=20)
    skinConcerns = models.CharField(max_length=255)
    personalValues = models.CharField(max_length=255)
    maximumBudget = models.DecimalField(max_digits=15, decimal_places=2)
    skinAllergies = models.CharField(max_length=255)
    lifestyle = models.CharField(max_length=255)
    skincareRoutinePreference = models.CharField(choices=[('Cleanser', 'Cleanser'), ('Toner', 'Toner'), ('Exfoliant', 'Exfoliant'), ('Serum', 'Serum'), ('Moisturizer', 'Moisturizer'), ('Sunscreen', 'Sunscreen')], max_length=20)

class SkincareRoutine(models.Model):
    userID = models.IntegerField()
    routineName = models.CharField(max_length=255)
    routineNotes = models.CharField(max_length=255)
    routineStartDate = models.DateField()
    routineEndDate = models.DateField(null=True, blank=True)
    frequency = models.IntegerField()

class User(models.Model):
    username = models.CharField(max_length=255)
    firstName = models.CharField(max_length=255, null=True, blank=True)
    lastName = models.CharField(max_length=255, null=True, blank=True)
    dob = models.DateField(null=True, blank=True)
    skinType = models.CharField(choices=[('Normal', 'Normal'), ('Dry', 'Dry'), ('Oily', 'Oily'), ('Sensitive', 'Sensitive'), ('Combination', 'Combination')], max_length=50)

class UserList(models.Model):
    userID = models.IntegerField()
    listName = models.CharField(max_length=255)
    listDescription = models.CharField(max_length=255)
    totalCost = models.IntegerField(null=True)
