from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    print(request.POST.get('text'))
    return render(request , 'index.html')

def home(request):
  
    return  render(request, "Home.html")