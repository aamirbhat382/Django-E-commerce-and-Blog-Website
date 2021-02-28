from django.db import models
from django.db.models.fields import URLField

# Create your models here.
class Product(models.Model):
    product_id=models.AutoField
    name=models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    image = URLField()
    description=models.CharField(max_length=300)
    category = models.CharField(max_length=50)
    pub_date=models.DateField()

    def __str__(self):
        return self.name

class Orders(models.Model):
    order_id= models.AutoField(primary_key=True)
    items_json= models.CharField(max_length=5000)
    name=models.CharField(max_length=90)
    email=models.CharField(max_length=111)
    phone=models.CharField(max_length=111)
    address=models.CharField(max_length=111)
    country=models.CharField(max_length=111)
    state=models.CharField(max_length=111)
    zip=models.CharField(max_length=111)

    def __str__(self):
        return self.name
