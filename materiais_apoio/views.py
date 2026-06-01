from django.shortcuts import render
from .models import Figura

# Create your views here.
def MateriaisApoio(request):
    figura = Figura.objects.all()
    
    contexto = {
        "figura" : figura
    }
    return render(request, 'materiais_apoio/material_apoio.html', contexto)
