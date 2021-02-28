from django.contrib import admin

# Register your models here.
from .models import Product, Orders

admin.site.register(Product)
admin.site.register(Orders)
