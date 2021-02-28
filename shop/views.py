from django.db.models.fields import EmailField
from django.http import HttpResponse
from django.shortcuts import redirect, render
from . models import Orders, Product
from math import ceil
# Create your views here.


def Homepage(request):

    allproducts = []
    category_products = Product.objects.values('category', 'id')
    categorys = {item["category"] for item in category_products}
    for cat in categorys:
        products = Product.objects.filter(category=cat)
        category_nospace = []
        category_name = cat.replace(" ", "")
        category_nospace.append(category_name)
        n = len(products)
        no_of_slides = n//3 + ceil((n/3)) - n//3
        allproducts.append([products, range(1, no_of_slides),
                            no_of_slides, category_nospace])

    params = {'allproducts': allproducts}
    return render(request, 'shop/home.html', params)


def About(request):
    return render(request, 'shop/about.html')


def productView(request, myid):
    product = Product.objects.filter(id=myid)
    # print(product[0])
    params = {'product': product[0]}
    return render(request, 'shop/product.html', params)


def cart(request):
    if request.method == 'POST':
        items_json = request.POST.get('items_json', ''),
        name = request.POST.get('name', ''),
        email = request.POST.get('email', ''),
        phone = request.POST.get('phone', ''),
        address = request.POST.get('address1', '') + \
            "" + request.POST.get('address2', ''),
        country = request.POST.get('country', ''),
        state = request.POST.get('state', ''),
        zip = request.POST.get('zip', '')
        Order = Orders(items_json=items_json, name=name, email=email,
                       phone=phone, address=address, country=country, state=state, zip=zip)
        Order.save()
        Thank = True
        orderId = Order.order_id
        print(orderId)
        params = {'orderId' : orderId, 'Thank':Thank}
        return render(request, 'shop/cart.html', params)
    return render(request, 'shop/cart.html')


def tracker(request):
    order = Orders.objects.filter(email='admin@dailypost.com')
    params = {'id': order[0]}
    return render(request, 'shop/tracker.html', params)
