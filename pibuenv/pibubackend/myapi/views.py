from django.views.generic import View
from django.http import JsonResponse
from .models import Product

class ProductListView(View):
    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        data = [{"id": product.id, "name": product.productName, "type": product.productType, "image": product.imageLink, "skintypes":product.skinTypePreference} for product in products]
        return JsonResponse(data, safe=False)

class ProductDetailView(View):
    def get(self, request, id, *args, **kwargs):
        try:
            product = Product.objects.get(id=id)
            data = {
                "id": product.id,
                "name": product.productName,
                "type": product.productType,
                "image": product.imageLink,
                "skintypes": product.skinTypePreference
                # Add more fields as needed
            }
            return JsonResponse(data)
        except Product.DoesNotExist:
            return JsonResponse({"error": "Product not found"}, status=404)
