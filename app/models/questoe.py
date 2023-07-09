from ckeditor_uploader.fields import RichTextUploadingField
from .base import BaseModel
from django.db import models
class Questoe(BaseModel):
    """Class question with its attributes"""
    numero = models.IntegerField()
    ESCOLHAS_ANO = (
        ('2018', '2018'), ('2019', '2019'), ('2020', '2020'), ('2021', '2021'), ('2022', '2022'), ('2023', '2023'),
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
    link = models.CharField(max_length=1000, verbose_name ='Link para o vídeo do youtube')
    enunciado1 = models.CharField(max_length=4000, default="", verbose_name='Copiar e colar o que tiver escrito no enunciado aqui, este campo é para filtro.')
    enunciado = RichTextUploadingField(verbose_name='Enunciado:')
    alternativa_a = RichTextUploadingField(verbose_name='Alternativa A: ')
    alternativa_b = RichTextUploadingField(verbose_name='Alternativa B: ')
    alternativa_c = RichTextUploadingField(verbose_name='Alternativa C: ')
    alternativa_d = RichTextUploadingField(verbose_name='Alternativa D: ')
    alternativa_e = RichTextUploadingField(verbose_name='Alternativa E: ')


    """Method to replace youtube link with embed"""
    def save(self, *args, **kwargs):
        self.link = self.link.replace("watch?v=", "embed/")
        return super(Questoe, self).save(*args, **kwargs)
    

    """Return question's number and year"""
    def __str__(self):
        return f'{self.numero} - {self.ano}'
    
