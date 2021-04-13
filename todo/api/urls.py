from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiurls, name="apiurls"),
    path('tasks/', views.taskList, name="tasks"),
    path('taskDetail/<id>/', views.taskDetail, name="taskDetail"),
    path('newTask/', views.newTask, name="newTask"),
    path('taskUpdate/<id>/', views.taskUpdate, name="taskUpdate"),
]
