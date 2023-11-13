from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("api/player/<dados>/", views.api_player),
]
