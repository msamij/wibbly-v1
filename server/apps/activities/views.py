from django.shortcuts import render

from .utils.context_objects import get_context


def activity(request, activity):
    return render(request, 'activity.html', status=200, context=get_context(activity))
