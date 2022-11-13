from django.urls import path
from django.views.generic import TemplateView
from .views import *
from . import views
app_name = 'app'


urlpatterns = [
    path('', TemplateView.as_view(template_name='base.html'), name='base-list'),
    path('questao/', QuestoesList.as_view(), name='questoes-list'),
    path('equipe/', TemplateView.as_view(template_name='equipe.html'), name='equipe-list'),
    path('contato/', TemplateView.as_view(template_name='contato.html'), name='contato'),
    path('form/', TemplateView.as_view(template_name='form.html'), name='form'),
]