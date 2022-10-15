from django.shortcuts import render
from server.apps.main.utils.context_objects import get_context


def index(request):
    return render(request, 'index.html', status=200, context=get_context())
