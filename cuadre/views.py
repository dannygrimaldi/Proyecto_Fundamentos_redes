from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions




@ensure_csrf_cookie
def get_csrf_token(request):
    return render(request, 'index.html', {'csrfToken': get_token(request)}) 
    #return JsonResponse({'csrfToken': get_token(request)})


