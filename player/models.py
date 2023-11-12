from django.db import models


# Create your models here.
class Player(models.Model):
    username = models.CharField(max_length=50)
    times_searched = models.IntegerField(default=0)

    def __str__(self):
        return self.username
