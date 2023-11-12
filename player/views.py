from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Player
from .serializers import PlayerSerializer


@api_view(["GET", "POST"])
def api_player(request, username):
    try:
        player = Player.objects.get(name=username)
    except Player.DoesNotExist:
        raise Http404()
    if request.method == "POST":
        new_player_data = request.data
        player.username = new_player_data["username"]
        player.puuid = new_player_data["puuid"]
        player.summonerLevel = new_player_data["summonerLevel"]
        player.profileIconId = new_player_data["profileIconId"]
        player.times_searched = new_player_data["times_searched"]
        player.rank = new_player_data["rank"]
        player.tier = new_player_data["tier"]

        player.save()
    serialized_player = PlayerSerializer(player)
    return Response(serialized_player.data)
