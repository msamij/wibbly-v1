from django.shortcuts import render

from .utils.context_objects import get_context


def tour(request, tour: str):
    return render(request, 'tour.html', status=200, context=get_context(tour))
