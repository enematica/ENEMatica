from django.urls import path, include
from django.views.generic import TemplateView

from .views import *
from materiais_apoio.views import (
    MateriaisApoio,
    FiguraDetail,
    JogoDetail,
    QuestaoModeladaDetail,
    DownloadFigura,
    DownloadJogo,
    DownloadQuestao,
)

app_name = 'app'

urlpatterns = [
    path('', TemplateView.as_view(template_name='base.html'), name='base'),
    path('questoes/', QuestoesList.as_view(), name='questoes'),
    path('thanks/', TemplateView.as_view(template_name='thanks.html'), name='thanks'),
    path('galeria/', FotosList.as_view(), name='galeria'),
    path('resumos/', ResumosList.as_view(), name='resumos'),
    path('simulado/', SimuladoList.as_view(), name='simulado'),
    path('h1v2327/', QuestoesList2.as_view(), name='simulado_escolas'),
    path('sobre-nos/', SobreNosView.as_view(), name='sobre_nos'),

    path('materiais-apoio/', MateriaisApoio, name='materiais_apoio'),

    path('figura/<int:id>/', FiguraDetail, name='figura_detail'),
    path('figura/<int:id>/download/', DownloadFigura, name='download_figura'),

    path('jogo/<int:id>/', JogoDetail, name='jogo_detail'),
    path('jogo/<int:id>/download/', DownloadJogo, name='download_jogo'),

    path('questaomodelada/<int:id>/', QuestaoModeladaDetail, name='questaomodelada_detail'),
    path('questaomodelada/<int:id>/download/', DownloadQuestao, name='download_questao'),
]