from django.db import models


# Create your models here.
class Player(models.Model):
    username = models.CharField(max_length=50)
    summonerLevel = models.IntegerField()
    profileIconId = models.IntegerField()
    times_searched = models.IntegerField(default=0)
    rank = models.CharField(max_length=50, default="Unranked")
    tier = models.CharField(max_length=50, default="Unranked")
