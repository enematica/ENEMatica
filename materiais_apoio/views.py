from django.shortcuts import render
from .models import Figura, Jogo

# Create your views here.
def MateriaisApoio(request):
    figura = Figura.objects.all()
    jogo = Jogo.objects.all()
    
    contexto = {
        "figura" : figura,
        "jogo" : jogo
    }
    return render(request, 'materiais_apoio/material_apoio.html', contexto)
