from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.ProductListView.as_view(), name='products_list'),
    path('<int:id>/', views.ProductDetailView.as_view(), name='product_detail'),
]
