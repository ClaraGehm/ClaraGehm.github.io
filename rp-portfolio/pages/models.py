from django.db import models

# Create your models here.

class SearchPlant(models.Model):
    newplant = models.CharField(max_length = 100,null=False,blank = False)

    def __str__(self):
        return self.newplant