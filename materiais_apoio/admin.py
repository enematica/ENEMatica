from django.contrib import admin
from .models import Figura, ImagemFigura, ModelagemFigura, Jogo, ImagemJogo, ModelagemJogo

# Register your models here.
class ImagemFiguraInline(admin.StackedInline):
    model = ImagemFigura
    extra = 1

class ModelagemFiguraInline(admin.StackedInline):
    model = ModelagemFigura
    extra = 1

@admin.register(Figura)
class FiguraAdmin(admin.ModelAdmin):
    inlines = [
        ImagemFiguraInline,
        ModelagemFiguraInline,      
    ]
    
class ImagemJogoInline(admin.StackedInline):
    model = ImagemJogo
    extra = 1

class ModelagemJogoInline(admin.StackedInline):
    model = ModelagemJogo
    extra = 1

@admin.register(Jogo)
class FiguraAdmin(admin.ModelAdmin):
    inlines = [
        ImagemJogoInline,
        ModelagemJogoInline,      
    ]
