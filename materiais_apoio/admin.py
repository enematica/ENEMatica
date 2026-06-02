from django.contrib import admin
from .models import Figura, ImagemFigura, ModelagemFigura

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
