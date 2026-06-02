from django.db import models

# Create your models here.
class ImagemBase(models.Model):
    imagem = models.ImageField(upload_to='modelagens/fotos', help_text='Obs: COLOCAR IMAGEM DA CAPA AQUI TAMBÉM')

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

    nome = models.CharField(max_length=100)
    arquivo = models.FileField(upload_to='modelagens/arquivos/')

    def __str__(self):
        return self.nome
    

