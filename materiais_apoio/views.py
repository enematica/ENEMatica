from django.shortcuts import render
from .models import Figura, Jogo, QuestaoModelada

# Create your views here.
def MateriaisApoio(request):
    figura = Figura.objects.all()
    jogo = Jogo.objects.all()
    questao = QuestaoModelada.objects.all()
    
    contexto = {
        "figura" : figura,
        "jogo" : jogo,
        "questao" : questao,
    }
    return render(request, 'materiais_apoio/material_apoio.html', contexto)
