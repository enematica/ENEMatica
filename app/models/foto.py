from .base import BaseModel
from django.db import models
class Foto(BaseModel):
    """Class photo with its attributes"""
    contexto = models.CharField(max_length=100)
    imagem = models.ImageField()

    """Method to return the photo's context"""
    def __str__(self):
        return f'{self.contexto}'