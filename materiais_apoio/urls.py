from django.urls import path
from .views import MateriaisApoio

app_name = 'materiais_apoio'

urlpatterns = [
    path('', MateriaisApoio, name='materiais_apoio'),
]