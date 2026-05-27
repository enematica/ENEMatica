from cgitb import text
from multiprocessing import context
from re import template
from urllib import request
from django.shortcuts import render, redirect
from .models import Questoe, Resumo, Foto
from django.views.generic import ListView
from itertools import chain
from django.db.models import Q

from django.views.generic import ListView
from django.db.models import Q
from .models import Questoe


class QuestoesList(ListView):
    model = Questoe
    template_name = 'questoes.html'
    paginate_by = 5

    def get_queryset(self):

        queryset = Questoe.objects.all()

        conteudo = self.request.GET.get('conteudos2')
        ano = self.request.GET.get('anos2')
        dificuldade = self.request.GET.get('dificuldades2')
        enunciado = self.request.GET.get('enunciado')

        # =========================
        # FILTRO DO ENUNCIADO
        # =========================
        if enunciado:

            enunciado = enunciado.strip()

            # Número da questão
            if enunciado.isdigit():
                queryset = queryset.filter(numero=int(enunciado))

            # Palavra-chave
            else:
                queryset = queryset.filter(
                    enunciado__icontains=enunciado
                )

        # =========================
        # FILTRO DE CONTEÚDO
        # =========================
        if conteudo and conteudo != 'Todos':

            conteudos = [
                c.strip()
                for c in conteudo.split(',')
                if c.strip() != '' and c != 'Todos'
            ]

            if conteudos:

                query_conteudo = Q()

                for c in conteudos:
                    query_conteudo |= Q(conteudo__icontains=c)

                queryset = queryset.filter(query_conteudo)

        # =========================
        # FILTRO DE ANO
        # =========================
        if ano and ano != 'Todos':

            anos = [
                a.strip()
                for a in ano.split(',')
                if a.strip() != '' and a != 'Todos'
            ]

            if anos:
                queryset = queryset.filter(ano__in=anos)

        # =========================
        # FILTRO DE DIFICULDADE
        # =========================
        if dificuldade and dificuldade != 'Todos':

            dificuldades = [
                d.strip()
                for d in dificuldade.split(',')
                if d.strip() != '' and d != 'Todos'
            ]

            if dificuldades:

                query_dificuldade = Q()

                for d in dificuldades:
                    query_dificuldade |= Q(dificuldade__icontains=d)

                queryset = queryset.filter(query_dificuldade)

        return queryset.order_by('-ano', '-numero')
    

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


class SimuladoList(ListView):
    """  """
    model = Questoe
    template_name = 'simulado.html'
    paginate_by = 45
    #method to return queryset
    def get_queryset(self):
        conteudo = self.request.GET.get('conteudos2')
        ano = self.request.GET.get('anos2')
        dificuldade = self.request.GET.get('dificuldades2')
        self.quant_questoes = self.request.GET.get('quant_questoes2')
        print((self.quant_questoes))
        self.tempo = self.request.GET.get('tempo2')
        print((self.tempo))

        # Continuação
        if conteudo != None or ano != None or dificuldade != None or self.quant_questoes != None or self.tempo != None:
            if len(conteudo) > 0 or len(ano) > 0 or len(dificuldade) > 0 or len(self.quant_questoes) > 0 or len(self.tempo) > 0:
                conteudos = conteudo.split(',')
                anos = ano.split(',')
                dificuldades = dificuldade.split(',')
                # Caso não seja arrumado a seleção mutua:
                if self.quant_questoes == '':
                    self.quant_questoes = '15'
                if self.tempo == '':
                    self.tempo = '210'
                self.quant_questoes = int(self.quant_questoes.split(',')[0])
                self.tempo = int(self.tempo.split(',')[0])
                print(conteudos)# =+=+=+=+=+=+=+=+=+=+=
                print(anos)# =+=+=+=+=+=+=+=+=+=+=
                print(dificuldades)# =+=+=+=+=+=+=+=+=+=+=
                print(self.quant_questoes)
                print(self.tempo)
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
                    return questoes.order_by('?')
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
                    return questoes.order_by('?')
            else:
                self.quant_questoes = '15'
                self.tempo = '210'
                questoes = Questoe.objects.all()
                return questoes.order_by('?')
        else:
            self.quant_questoes = '15'
            self.tempo = '210'
            questoes = Questoe.objects.all()
            return questoes.order_by('?')


    def get_context_data(self, **kwargs):
        nbatata = super().get_context_data(**kwargs)
        nbatata['quant_questoes'] = self.quant_questoes
        nbatata['tempo'] = self.tempo
        return nbatata

class SobreNosView(ListView):
    template_name = 'sobre_nos.html'
    context_object_name = 'dummy_list'  # nome do objeto no template

    def get_queryset(self):
        return []  # lista vazia só pra ListView não reclamar