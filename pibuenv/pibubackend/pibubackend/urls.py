from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('myapi.urls')),
    path('users/', include('user_api.urls')),
    path('sorting/', include('sorting.urls')),
    path('skinquiz/', include('skinquiz.urls'))
]