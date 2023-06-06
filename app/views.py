from cgitb import text
from multiprocessing import context
from re import template
from urllib import request
from django.shortcuts import render, redirect
from .models import Questoe
from django.views.generic import ListView

# Create your views here.

class QuestoesList(ListView):
    """Classe que pega outra classe e transforma numa lista pra facilitar o processo de exibição"""
    #model desta classe recebe a classe do banco de dados
    model = Questoe
    #template ao qual está vinculada
    template_name = 'facil.html'
    #por quantos objetos está sendo paginada
    paginate_by = 5
    def get_queryset(self):
        #recebendo os dados
        text_enunciado = self.request.GET.get('enunciado')
        text_conteudo = self.request.GET.get('conteudo')
        text_anos = self.request.GET.get('anos')
        text_dificuldade = self.request.GET.get('dificuldade')
        
        #resolvendo erros
        if text_conteudo == None or text_conteudo == 'undefined':
            text_conteudo = ''
        if text_dificuldade == None or text_dificuldade == 'undefined':
            text_dificuldade = ''
        if text_anos == None or text_anos == 'undefined':
            text_anos = ''
        if text_enunciado == None or text_enunciado == 'undefined':
            text_enunciado = ''

        #filtrando
        if text_conteudo or text_enunciado or text_dificuldade or text_anos:
            questoes = Questoe.objects.filter(enunciado1__icontains=text_enunciado, conteudo__icontains=text_conteudo, ano__icontains=text_anos, dificuldade__icontains=text_dificuldade)
        else:
            questoes = Questoe.objects.all()
        return questoes
        


