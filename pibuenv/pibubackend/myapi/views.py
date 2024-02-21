from django.views.generic import View
from django.http import JsonResponse
from .models import Products

class ProductListView(View):
    def get(self, request, *args, **kwargs):
        products = Products.objects.all()
        data = [{
                    "id": product.product_id, 
                    "brandid": product.brand_id,
                    "retailerid": product.retailer_id,
                    "name": product.product_name, 
                    "category": product.product_category,
                    "type": product.product_type, 
                    "image": product.image_link, 
                    "skintypes":product.skin_type_preference
                } for product in products]
        return JsonResponse(data, safe=False)

class ProductDetailView(View):
    def get(self, request, id, *args, **kwargs):
        try:
            product = Products.objects.get(product_id=id)
            data = {
                "id": product.product_id, 
                "brandid": product.brand_id,
                "retailerid": product.retailer_id,
                "name": product.product_name, 
                "category": product.product_category,
                "type": product.product_type, 
                "features": product.product_features,
                "image": product.image_link, 
                "skintypes":product.skin_type_preference,
                "weeklyfrequency": product.recommended_weekly_usage_frequency,
                "price": product.retail_price,
                "actives": product.active_ingredients,
                "ingredients": product.ingredient_list,
                "targetconcerns": product.target_concerns
                # Add more fields as needed
            }
            return JsonResponse(data)
        except Products.DoesNotExist:
            return JsonResponse({"error": "Product not found"}, status=404)
