from cgitb import text
from multiprocessing import context
from re import template
from urllib import request
from django.shortcuts import render, redirect
from .models import Questoe, Resumo, Foto
from django.views.generic import ListView


class QuestoesList(ListView):
    """Class that turns the question class in a list class"""
    model = Questoe
    #vinculated template
    template_name = 'questoes.html'
    #objects paginated
    paginate_by = 5
    #method to return queryset
    def get_queryset(self):
        #receiving the data
        text_enunciado = self.request.GET.get('enunciado')
        text_conteudo = self.request.GET.get('conteudo')
        text_anos = self.request.GET.get('anos')
        text_dificuldade = self.request.GET.get('dificuldade')

        #solving errors
        if text_conteudo == None or text_conteudo == 'undefined':
            text_conteudo = ''
        if text_dificuldade == None or text_dificuldade == 'undefined':
            text_dificuldade = ''
        if text_anos == None or text_anos == 'undefined':
            text_anos = ''
        if text_enunciado == None or text_enunciado == 'undefined':
            text_enunciado = ''

        #filtering
        if text_conteudo or text_enunciado or text_dificuldade or text_anos:
            if(text_enunciado.isnumeric()) == True:
                questoes = Questoe.objects.filter(numero=int(text_enunciado),conteudo__icontains=text_conteudo, ano__icontains=text_anos, dificuldade__icontains=text_dificuldade)
            else:
                questoes = Questoe.objects.filter(enunciado1__icontains=text_enunciado,conteudo__icontains=text_conteudo, ano__icontains=text_anos, dificuldade__icontains=text_dificuldade)
        else:
            questoes = Questoe.objects.all()
        return questoes.order_by('-ano','-numero')
    

class FotosList(ListView):
    """Class that turns the resume class in a list class"""
    model = Foto
    template_name = 'galeria.html'   
    ordering = ['-id']
class ResumosList(ListView):
    """Class that turns the resume class in a list class"""
    model = Resumo
    template_name = 'resumos.html'
    ordering = ['-id']


