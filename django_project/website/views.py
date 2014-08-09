from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

import json
import redis

def home(request):
	return render(request, 'website/home.html')

def info(request):
	return render(request, 'website/info.html')


# view function for handling post requests that will be sent peridocally using celery and redis as message broker for celery
@api_view(['POST',])
def track_me(request): 
	try:
		lat = request.DATA.get("lat")
		lon = request.DATA.get("lon")

		message = json.dumps([lat, lon,])

		new_channel = 'channel_demo'

		# implementation of the Redis protocol
		r = redis.StrictRedis() 

		# publish message to defined channel
		r.publish(new_channel, message) 

		return Response(status=status.HTTP_200_OK)

	except:
		return Response(status=status.HTTP_400_BAD_REQUEST)