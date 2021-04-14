from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Task
from .serializer import TaskSerializer


@api_view(['GET'])
def apiurls(request):
    urls = {
        "Task List": "tasks/",
        "Task Detail": "taskDetail/<id>/",
        "New Task": "newTask/",
        "Task Update": "taskUpdate/<id>/",
        "Task Delete": "taskDelete/<id>/",
    }
    return Response(urls)


@api_view(['GET'])
def taskList(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def taskDetail(request, id):
    task = Task.objects.get(id=id)
    serializer = TaskSerializer(task)

    return Response(serializer.data)


@api_view(['POST'])
def newTask(request):
    serializer = TaskSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['POST'])
def taskUpdate(request, id):
    task = Task.objects.get(id=id)
    serializer = TaskSerializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, id):
    task = Task.objects.get(id=id)
    task.delete()

    return Response("Task Deleted!!!")
