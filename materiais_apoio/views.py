from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.db.models import Q
from django.urls import reverse
from django.core.paginator import Paginator
from .models import Figura, Jogo, QuestaoModelada
from io import BytesIO
import zipfile
import os


# Create your views here.
def MateriaisApoio(request):
    figura = Figura.objects.all().order_by('-id')
    jogo = Jogo.objects.all().order_by('-id')
    questao = QuestaoModelada.objects.all().order_by('-id')
    
    contexto = {
        "figura": figura,
        "jogo": jogo,
        "questao": questao,
    }

    return render(request, 'materiais_apoio/material_apoio.html', contexto)



def MateriaisRelacionados(request, impressora_3d, cortadora_laser, objeto=None):

    filtro = Q()

    if impressora_3d:
        filtro |= Q(impressora_3d=True)

    if cortadora_laser:
        filtro |= Q(cortadora_laser=True)


    questoes = QuestaoModelada.objects.filter(filtro)
    figuras = Figura.objects.filter(filtro)
    jogos = Jogo.objects.filter(filtro)


    # Remove o próprio material da recomendação
    if objeto:

        if isinstance(objeto, QuestaoModelada):
            questoes = questoes.exclude(id=objeto.id)

        elif isinstance(objeto, Figura):
            figuras = figuras.exclude(id=objeto.id)

        elif isinstance(objeto, Jogo):
            jogos = jogos.exclude(id=objeto.id)



    materiais = []


    for q in questoes:

        materiais.append({
            "id": q.id,
            "titulo": f"Questão {q.questao.numero} - {q.questao.ano}",
            "descricao": q.questao.conteudo,
            "imagem": q.capa.url,
            "url": reverse(
                "app:materiais_apoio:questaomodelada_detail",
                args=[q.id]
            ),
        })



    for f in figuras:

        materiais.append({
            "id": f.id,
            "titulo": f.nome_figura,
            "descricao": f.descricao,
            "imagem": f.capa.url,
            "url": reverse(
                "app:materiais_apoio:figura_detail",
                args=[f.id]
            ),
        })



    for j in jogos:

        materiais.append({
            "id": j.id,
            "titulo": j.nome_jogo,
            "descricao": j.descricao,
            "imagem": j.capa.url,
            "url": reverse(
                "app:materiais_apoio:jogo_detail",
                args=[j.id]
            ),
        })



    # Ordena os materiais mais recentes primeiro
    materiais.sort(key=lambda x: x["id"], reverse=True)



    # PAGINAÇÃO
    paginator = Paginator(materiais, 12)

    pagina = request.GET.get("page")

    materiais_paginados = paginator.get_page(pagina)



    return {
        "materiais_relacionados": materiais_paginados
    }





def FiguraDetail(request, id):

    figura = get_object_or_404(Figura, id=id)

    contexto = {

        "figura": figura,

        **MateriaisRelacionados(
            request,
            figura.impressora_3d,
            figura.cortadora_laser,
            figura
        )
    }


    return render(
        request,
        "materiais_apoio/figura_detail.html",
        contexto
    )





def JogoDetail(request, id):

    jogo = get_object_or_404(Jogo, id=id)

    contexto = {

        "jogo": jogo,

        **MateriaisRelacionados(
            request,
            jogo.impressora_3d,
            jogo.cortadora_laser,
            jogo
        )
    }


    return render(
        request,
        "materiais_apoio/jogo_detail.html",
        contexto
    )





def QuestaoModeladaDetail(request, id):

    questao = get_object_or_404(
        QuestaoModelada,
        id=id
    )


    contexto = {

        "questao": questao,

        **MateriaisRelacionados(
            request,
            questao.impressora_3d,
            questao.cortadora_laser,
            questao
        )
    }


    return render(
        request,
        "materiais_apoio/questaomodelada_detail.html",
        contexto
    )





def gerar_zip(objeto, nome_zip):

    buffer = BytesIO()


    with zipfile.ZipFile(
        buffer,
        'w',
        zipfile.ZIP_DEFLATED
    ) as zip_file:

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

    figura = get_object_or_404(
        Figura,
        id=id
    )

    return gerar_zip(
        figura,
        figura.nome_figura
    )





def DownloadJogo(request, id):

    jogo = get_object_or_404(
        Jogo,
        id=id
    )

    return gerar_zip(
        jogo,
        jogo.nome_jogo
    )





def DownloadQuestao(request, id):

    questao = get_object_or_404(
        QuestaoModelada,
        id=id
    )

    return gerar_zip(
        questao,
        f"Questao_{questao.questao.numero}-{questao.questao.ano}"
    )