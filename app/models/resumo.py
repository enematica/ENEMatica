from ckeditor_uploader.fields import RichTextUploadingField
from .base import BaseModel
from django.db import models
class Resumo(BaseModel):
    """Class resume with its attributes"""
    nome = models.CharField(max_length=100, default='')
    imagem = models.ImageField()

    """Method to return the resume's context"""
    def __str__(self):
        return f'{self.nome}'