from cgitb import text
from multiprocessing import context
from re import template
from urllib import request
from django.shortcuts import render, redirect
from .models import Questoe, Resumo, Foto
from django.views.generic import ListView
from itertools import chain


class QuestoesList(ListView):
    """Class that turns the question class in a list class"""
    model = Questoe
    template_name = 'questoes.html'
    paginate_by = 5
    def get_queryset(self):
        conteudo = self.request.GET.get('conteudos2')
        ano = self.request.GET.get('anos2')
        dificuldade = self.request.GET.get('dificuldades2')
        if conteudo != None or ano != None or dificuldade != None:
            if len(conteudo) > 0 or len(ano) > 0 or len(dificuldade) > 0:
                conteudos = conteudo.split(',')
                anos = ano.split(',')
                dificuldades = dificuldade.split(',')
                print(conteudos)
                print(anos)
                print(dificuldades)
                querysets = []
                contador = 0
                contador2 = 0
                contador3 = 0
                x = 0
                if len(conteudos) == 1:
                    print('aqui')
                    if 'Todos' in conteudos:
                        conteudos = ['']
                if len(anos) == 1:
                    if 'Todos' in anos:
                        anos = ['']
                if len(dificuldades) == 1:
                    if 'Todos' in dificuldades:
                        dificuldades = ['']
                if dificuldades == [''] and anos == [''] and conteudos == ['']:
                    questoes = Questoe.objects.all()
                    return questoes.order_by('-ano', '-numero')
                else:
                    while x < len(conteudos):
                        if contador3 == len(dificuldades):
                            contador += 1
                            contador3 = 0
                        if contador == len(anos):
                            contador2 += 1
                            contador = 0
                            x += 1
                            if x == len(conteudos):
                                break
                        querysets.append(Questoe.objects.filter(ano__icontains=anos[contador], conteudo__icontains=conteudos[contador2], dificuldade__icontains=dificuldades[contador3]))
                        contador3 += 1
                    if len(querysets) < 32:
                        for x in range(0,32-len(querysets)):
                            querysets.append(Questoe.objects.filter(ano='0000'))
                    questoes = querysets[0] | querysets[1] | querysets[2] | querysets[3] | querysets[4] | querysets[5] | querysets[6] | querysets[7] | querysets[8] | querysets[9] | querysets[10] | querysets[11] | querysets[12] | querysets[13] | querysets[14] | querysets[15] | querysets[16] | querysets[17] | querysets[18] | querysets[19] | querysets[20] | querysets[21] | querysets[22] | querysets[23] | querysets[24] | querysets[25] | querysets[26] | querysets[27] | querysets[28] | querysets[29] | querysets[30] | querysets[31]
                    return questoes.order_by('-ano','-numero')
            else:
                questoes = Questoe.objects.all()
                return questoes.order_by('-ano', '-numero')
        else:
            questoes = Questoe.objects.all()
            return questoes.order_by('-ano', '-numero')
    

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

class QuestoesList2(ListView):
    """This class is used to do the exams for the schools"""
    model = Questoe
    template_name = 'simulado_escolas.html'


