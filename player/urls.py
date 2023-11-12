from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/player/<str:username>/", views.api_player),
]
