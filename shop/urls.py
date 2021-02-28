from os import name
from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path("", views.Homepage,  name='Homepage'),
    path("about/", views.About, name='About'),
    path("product/<int:myid>", views.productView, name='productView'),
    path("cart/", views.cart, name='cart'),
    path('tracker/' , views.tracker , name='tracker')

]
