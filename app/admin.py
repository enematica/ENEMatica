from django.contrib import admin
from app.models import Questoe, Foto, Resumo
# Register your models here.
class QuestoeAdmin(admin.ModelAdmin):
    ordering = ["-ano", "-numero"]
admin.site.register(Questoe, QuestoeAdmin)
admin.site.register(Foto)
admin.site.register(Resumo)