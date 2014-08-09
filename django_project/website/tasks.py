from celery.decorators import periodic_task 
from datetime import timedelta
import requests 

lats = [44.116357,44.116696,44.116912,44.117832,44.118595,44.117763,44.116892,44.116561,44.116245,44.116777,44.117062]
longs = [15.230971,15.231567,15.231964,15.233734,15.235139,15.235267,15.235332,15.234119,15.233443,15.232789,15.232253]

counter=0
@periodic_task(run_every=timedelta(seconds=3)) 
def demo_map_requests():
	global counter
	if counter<len(lats):
		lat=lats[counter]
		lon=longs[counter]

		payload = {'lat': '%s' %lat, 'lon': '%s' %lon} 
		r = requests.post("http://127.0.0.1:8000/track-me/", data=payload)

		counter+=1
	else:
		counter=0
