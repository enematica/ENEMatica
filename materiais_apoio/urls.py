from django.urls import path
from .views import MateriaisApoio

urlpatterns = [
    path('', MateriaisApoio, name='materiais_apoio'),
]