from django.shortcuts import render
from .models import SearchPlant
from django.http import HttpResponse

# Create your views here.

def inputPlant(request):
    if request.method == 'GET':
        plants = request.GET.get('plantSearch')

        new_plant = SearchPlant(newplant = plants)
        new_plant.save()
        return HttpResponse('Received: ' + new_plant)

    text = 'does this work'
    return render(request, "pages/index.html", {'text': text})