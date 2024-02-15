from django.db import models

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
