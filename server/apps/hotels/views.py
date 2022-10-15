from django.shortcuts import render

from .utils.context_objects import get_context


def hotel(request, hotel):
    return render(request, 'hotel.html', status=200, context=get_context(hotel))
