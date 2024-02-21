from django.db import models

class ProductCategoryType(models.Model):
    category = models.CharField(max_length=100)
    type = models.CharField(max_length=100)

class Brand(models.Model):
    brandID = models.AutoField(primary_key=True)
    brandName = models.CharField(max_length=255)

class Retailer(models.Model):
    retailerID = models.AutoField(primary_key=True)
    retailerName = models.CharField(max_length=255)