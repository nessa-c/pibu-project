from django.db import models

class AuthGroup(models.Model):
    name = models.CharField(max_length=150)

class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(null=True, blank=True)
    is_superuser = models.BooleanField(default=False)
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField()
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True)

class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

class Brand(models.Model):
    brandName = models.CharField(max_length=255)

class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(null=True, blank=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

class DoNotMix(models.Model):
    ingredientIDOne = models.IntegerField()
    ingredientIDTwo = models.IntegerField()
    reasonToAvoid = models.CharField(max_length=255)

class Ingredient(models.Model):
    ingredientName = models.CharField(max_length=255)
    ingredientFunction = models.CharField(max_length=255)

class ListProduct(models.Model):
    productID = models.IntegerField()

class Product(models.Model):
    brandID = models.IntegerField()
    retailerID = models.IntegerField()
    productName = models.CharField(max_length=255)
    productType = models.CharField(choices=[('Cleanser', 'Cleanser'), ('Toner', 'Toner'), ('Exfoliant', 'Exfoliant'), ('Serum', 'Serum'), ('Moisturizer', 'Moisturizer'), ('Sunscreen', 'Sunscreen')], max_length=20)
    durationUntilResults = models.IntegerField(null=True)
    recommendedUsageFrequency = models.IntegerField(null=True)
    expirationDuration = models.IntegerField(null=True)
    skinTypePreference = models.CharField(choices=[('Normal', 'Normal'), ('Dry', 'Dry'), ('Oily', 'Oily'), ('Sensitive', 'Sensitive'), ('Combination', 'Combination')], max_length=50)
    imageLink = models.CharField(max_length=10000)


class ProductIngredient(models.Model):
    prodID = models.ForeignKey(Product, on_delete=models.CASCADE)
    ingredID = models.ForeignKey(Ingredient, on_delete=models.CASCADE)

class Retailer(models.Model):
    retailerName = models.CharField(max_length=255)

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
