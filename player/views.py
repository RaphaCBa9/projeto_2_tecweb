from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Player
from .serializers import PlayerSerializer


@api_view(["GET", "POST"])
def api_player(request):
    print(request)
    if request.method == "POST":
        player = Player()
        new_player_data = request.data["data"]
        if not Player.objects.filter(username=new_player_data["username"]).exists():
            print(new_player_data)
            player.username = new_player_data["username"]
            player.summonerLevel = new_player_data["summonerLevel"]
            player.profileIconId = new_player_data["playerIconID"]
            player.times_searched += 1
            player.save()
        else:
            player = Player.objects.get(username=new_player_data["username"])
            player.times_searched += 1
            player.save()
    else:
        try:
            player = Player.objects.get(username=request.data["username"])
        except Player.DoesNotExist:
            raise Http404()

        player.save()
    serialized_player = PlayerSerializer(player)
    return Response(serialized_player.data)


# @api_view(["POST"])
# def api_player_add(request):
#     if request.method == "POST":
#         serializer = PlayerSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)
