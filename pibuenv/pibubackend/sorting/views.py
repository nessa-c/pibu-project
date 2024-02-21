from django.http import JsonResponse
from django.views.generic import View
from django.shortcuts import render
from .models import ProductCategoryType
from .models import Brand
from .models import Retailer

class ProductCategoryTypeView(View):
    def get(self, request, *args, **kwargs):
        categories = ProductCategoryType.objects.all()
        data = [{"category": category.category, "type": category.type} for category in categories]
        return JsonResponse(data, safe=False)

class BrandListView(View):
    def get(self, request, *args, **kwargs):
        brands = Brand.objects.all()
        data = [{"name": brand.brandName} for brand in brands]
        return JsonResponse(data, safe=False)

class BrandDetailView(View):
    def get(self, request, id, *args, **kwargs):
        try:
            brand = Brand.objects.get(brandID=id)
            data = {"id": brand.brandID, "name": brand.brandName}
            return JsonResponse(data)
        except Brand.DoesNotExist:
            return JsonResponse({"error": "Brand not found"}, status=404)

class RetailerListView(View):
    def get(self, request, *args, **kwargs):
        retailers = Retailer.objects.all()
        data = [{"name": retailer.retailerName} for retailer in retailers]
        return JsonResponse(data, safe=False)

class RetailerDetailView(View):
    def get(self, request, id, *args, **kwargs):
        try:
            retailer = Retailer.objects.get(retailerID=id)
            data = {"id": retailer.retailerID, "name": retailer.retailerName}
            return JsonResponse(data)
        except Retailer.DoesNotExist:
            return JsonResponse({"error": "Retailer not found"}, status=404)
