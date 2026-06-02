from django.db import models

class BaseModel(models.Model):
    """Classe principal"""

    class Meta:
        abstract = True
        app_label = 'app'    


