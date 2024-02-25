from django.shortcuts import render
from .models import SearchPlant

# Create your views here.

def home(request):
    if request.method == 'GET':
        plants = request.GET['plantSearch']

        new_plant = SearchPlant(newplant = plants)
        new_plant.save()
    text = 'does this work'
    return render(request, "pages/index.html", {'text': text})