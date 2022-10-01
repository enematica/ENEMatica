from cgitb import text
from multiprocessing import context
from re import template
from urllib import request
from django.shortcuts import render
from .models import Questoe
from django.views.generic import ListView

# Create your views here.

class QuestoesList(ListView):
    model = Questoe
    template_name = 'facil.html'
    paginate_by = 6
    def get_queryset(self):
        text_enunciado = self.request.GET.get('enunciado')
        text_conteudo = self.request.GET.get('conteudo')
        text_anos = self.request.GET.get('anos')
        text_dificuldade = self.request.GET.get('dificuldade')
        
        if text_conteudo == None:
            text_conteudo = ''
        if text_dificuldade == None:
            text_dificuldade = ''
        if text_anos == None:
            text_anos = ''
        if text_enunciado == None:
            text_enunciado = ''

        
        if text_anos == 'Todos':
            text_anos = ''
        if text_dificuldade == 'Todos':
            text_dificuldade = ''
        if text_conteudo or text_enunciado or text_dificuldade or text_anos:
            questoes = Questoe.objects.filter(enunciado1__icontains=text_enunciado, conteudo__icontains=text_conteudo, ano__icontains=text_anos, dificuldade__icontains=text_dificuldade)
        else:
            questoes = Questoe.objects.all()
        return questoes
def mostrar(request):
    template_name = 'facil.html'
    if request.method == "POST":
        #Para saber em qual alternativa o usuário clicou
        alternativaclicada = request.POST.get('exampleRadios')
        #Valor das alternativas
        alternativa_avalue = request.POST.get('valuea')
        alternativa_bvalue = request.POST.get('valueb')
        alternativa_cvalue = request.POST.get('valuec')
        alternativa_dvalue = request.POST.get('valued')
        alternativa_evalue = request.POST.get('valuee')
        #Resposta da questão
        resposta_certa = request.POST.get('resposta')
        #Particularidades da questão respondida
        conteudo = request.POST.get('conteudo')
        enunciado = request.POST.get('enunciado')
        numero = request.POST.get('numero')
        ano = request.POST.get('ano')
        dificuldade = request.POST.get('dificuldade')
        link = request.POST.get('link')
        context = {
            'link' : link,
            'conteudo' : conteudo,
            'enunciado' : enunciado,
            'numero' : numero,
            'ano' : ano,
            'dificuldade' : dificuldade,
            'alternativa_avalue' : alternativa_avalue,
            'alternativa_bvalue' : alternativa_bvalue,
            'alternativa_cvalue' : alternativa_cvalue,
            'alternativa_dvalue' : alternativa_dvalue,
            'alternativa_evalue' : alternativa_evalue,
            'alternativaclicada' : alternativaclicada,
            'resposta_certa' : resposta_certa
        }
        return render(request, 'resposta.html', context)