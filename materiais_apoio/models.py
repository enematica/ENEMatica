from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from app.models.questoe import Questoe

# Create your models here.
class ImagemBase(models.Model):
    imagem = models.ImageField(upload_to='modelagens/fotos')

    class Meta:
        abstract = True

#--------------FIGURAS--------------
class Figura(models.Model):
    nome_figura = models.CharField(max_length=100)
    impressora_3d = models.BooleanField(default=False)
    cortadora_laser = models.BooleanField(default=False)
    capa = models.ImageField(upload_to='modelagens/capas')

    def __str__(self):
        return f'{self.nome_figura}'
    
class ImagemFigura(ImagemBase):
    figura = models.ForeignKey(
        Figura,
        on_delete=models.CASCADE,
        related_name='imagens'
    )

    def __str__(self):
        return f"Imagem de {self.figura.nome_figura}"
    
class ModelagemFigura(models.Model):
    figura = models.ForeignKey(
        Figura,
        on_delete=models.CASCADE,
        related_name='arquivos'
    )

    arquivo = models.FileField(upload_to='modelagens/arquivos/')


    def __str__(self):
        return self.arquivo.name.split('/')[-1]
    

#--------------Jogos--------------
class Jogo(models.Model):
    nome_jogo = models.CharField(max_length=100)
    impressora_3d = models.BooleanField(default=False)
    cortadora_laser = models.BooleanField(default=False)
    descricao = RichTextUploadingField(verbose_name='descrição')
    capa = models.ImageField(upload_to='modelagens/capas')

    def __str__(self):
        return f'{self.nome_jogo}'
    
class ImagemJogo(ImagemBase):
    jogo = models.ForeignKey(
        Jogo,
        on_delete=models.CASCADE,
        related_name='imagens'
    )

    def __str__(self):
        return f"Imagem de {self.jogo.nome_jogo}"
    
class ModelagemJogo(models.Model):
    jogo = models.ForeignKey(
        Jogo,
        on_delete=models.CASCADE,
        related_name='arquivos'
    )

    arquivo = models.FileField(upload_to='modelagens/arquivos/')

    def __str__(self):
        return self.arquivo.name.split('/')[-1]
    
#--------------Questões Modeladas--------------
class QuestaoModelada(models.Model):
    questao = models.ForeignKey(
        Questoe,
        on_delete=models.CASCADE,
        related_name='modelagens'
    )
    
    impressora_3d = models.BooleanField(default=False)
    cortadora_laser = models.BooleanField(default=False)
    descricao = RichTextUploadingField(verbose_name='descrição da modelagem')
    capa = models.ImageField(upload_to='modelagens/capas')

    class Meta:
        verbose_name = "Questao Modelada"
        verbose_name_plural = "Questoes Modeladas"
    
    def __str__(self):
        return f'{self.questao}'
    
class ImagemQuestao(ImagemBase):
    questao = models.ForeignKey(
        QuestaoModelada,
        on_delete=models.CASCADE,
        related_name='imagens'
    )

    def __str__(self):
        return f"Imagem de {self.questao.questao.numero}"
    
class ModelagemQuestao(models.Model):
    questao = models.ForeignKey(
        QuestaoModelada,
        on_delete=models.CASCADE,
        related_name='arquivos'
    )

    arquivo = models.FileField(upload_to='modelagens/arquivos/')

    def __str__(self):
        return self.arquivo.name.split('/')[-1]
    