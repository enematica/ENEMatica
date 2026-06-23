from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Figura, Jogo, QuestaoModelada
from io import BytesIO
import zipfile
import os


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



def gerar_zip(objeto, nome_zip):
    buffer = BytesIO()

    with zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
        for arquivo in objeto.arquivos.all():
            zip_file.write(
                arquivo.arquivo.path,
                os.path.basename(arquivo.arquivo.name)
            )

    buffer.seek(0)

    response = HttpResponse(
        buffer.getvalue(),
        content_type='application/zip'
    )

    response['Content-Disposition'] = (
        f'attachment; filename="{nome_zip}.zip"'
    )

    return response


def DownloadFigura(request, id):
    figura = get_object_or_404(Figura, id=id)
    return gerar_zip(figura, figura.nome_figura)


def DownloadJogo(request, id):
    jogo = get_object_or_404(Jogo, id=id)
    return gerar_zip(jogo, jogo.nome_jogo)


def DownloadQuestao(request, id):
    questao = get_object_or_404(QuestaoModelada, id=id)
    return gerar_zip(questao, f"Questao_{questao.questao.numero}-{questao.questao.ano}")