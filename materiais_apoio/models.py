from django.db import models

# Create your models here.
class Figura(models.Model):
    nome_figura = models.TextField(max_length=100)
    capa = models.ImageField()
    
    def __str__(self):
        return f'{self.nome_figura}'