from django.urls import path
from . import views

urlpatterns = [
    # URLs for Brand views
    path('brands/', views.BrandListView.as_view(), name='brand-list'),
    path('brands/<int:id>/', views.BrandDetailView.as_view(), name='brand-detail'),
    
    # URLs for Retailer views
    path('retailers/', views.RetailerListView.as_view(), name='retailer-list'),
    path('retailers/<int:id>/', views.RetailerDetailView.as_view(), name='retailer-detail'),
    
    # URLs for ProductCategory views
    path('product-categories/', views.ProductCategoryTypeView.as_view(), name='product-category-list'),
]
