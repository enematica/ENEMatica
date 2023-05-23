from ckeditor_uploader.fields import RichTextUploadingField
from .base import BaseModel
from django.db import models
class Questoe(BaseModel):
    """Classe que modela uma questão"""
    numero = models.IntegerField()
    ESCOLHAS_ANO = (
        ('2018', '2018'), ('2019', '2019'), ('2020', '2020'), ('2021', '2021'),
    )
    ano = models.CharField(max_length=4, choices=ESCOLHAS_ANO)
    conteudo = models.CharField(max_length=200)
    ESCOLHAS_DIFICULDADE = (
        ('Fácil', 'Fácil'), ('Médio', 'Médio'), ('Difícil', 'Difícil'),
    )
    ESCOLHAS_RESPOSTA = (
        ('a', 'a'), ('b', 'b'), ('c', 'c'), ('d', 'd'), ('e', 'e'),
    )
    dificuldade = models.CharField(max_length=8, choices=ESCOLHAS_DIFICULDADE)
    resposta_certa = models.CharField(max_length=1, choices=ESCOLHAS_RESPOSTA, default='')
    link = models.CharField(max_length=1000, verbose_name ='Link para o vídeo do youtube, apagar a parte watch?v=, adicionar /embed/o que vem depois do watch?v=, exemplo: https://www.youtube.com/embed/FyOsoRALEG0')
    enunciado1 = models.CharField(max_length=4000, default="", verbose_name='Copiar e colar o que tiver escrito no enunciado aqui, este campo é para filtro.')
    enunciado = RichTextUploadingField(verbose_name='Enunciado: Cuidado com o tamanho da imagem, se for colocar')
    alternativa_a = RichTextUploadingField(verbose_name='Alternativa A: Cuidado com o tamanho da imagem, se for colocar')
    alternativa_b = RichTextUploadingField(verbose_name='Alternativa B: Cuidado com o tamanho da imagem, se for colocar')
    alternativa_c = RichTextUploadingField(verbose_name='Alternativa C: Cuidado com o tamanho da imagem, se for colocar')
    alternativa_d = RichTextUploadingField(verbose_name='Alternativa D: Cuidado com o tamanho da imagem, se for colocar')
    alternativa_e = RichTextUploadingField(verbose_name='Alternativa E: Cuidado com o tamanho da imagem, se for colocar')

    def __str__(self):
        """Classe para retornar o número da questão"""
        return f'{self.numero} - {self.ano}'
    
