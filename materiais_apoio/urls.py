from django.urls import path
from .views import (
    MateriaisApoio,
    FiguraDetail,
    JogoDetail,
    QuestaoModeladaDetail,
    DownloadFigura,
    DownloadJogo,
    DownloadQuestao,
)

app_name = 'materiais_apoio'

urlpatterns = [
    path('', MateriaisApoio, name='materiais_apoio'),

    path('figura/<int:id>/', FiguraDetail, name='figura_detail'),
    path('figura/<int:id>/download/', DownloadFigura, name='download_figura'),

    path('jogo/<int:id>/', JogoDetail, name='jogo_detail'),
    path('jogo/<int:id>/download/', DownloadJogo, name='download_jogo'),

    path('questaomodelada/<int:id>/', QuestaoModeladaDetail, name='questaomodelada_detail'),
    path('questaomodelada/<int:id>/download/', DownloadQuestao, name='download_questao'),
]