from django.shortcuts import render, get_object_or_404
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

def FiguraDetail(request, id):
    figura = get_object_or_404(Figura, id=id)
    contexto = {
        'figura' : figura,
    }
    return render(request, 'materiais_apoio/figura_detail.html', contexto)

def JogoDetail(request, id):
    jogo = get_object_or_404(Jogo, id=id)
    contexto = {
        'jogo' : jogo,
    }
    return render(request, 'materiais_apoio/jogo_detail.html', contexto)


def QuestaoModeladaDetail(request, id):
    questao = get_object_or_404(QuestaoModelada, id=id)
    contexto = {
        'questao' : questao,
    }
    return render(request, 'materiais_apoio/questaomodelada_detail.html', contexto)
