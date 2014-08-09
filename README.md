real-time-map
=============

An example of real-time web map developed with node.js, SockJS, Redis, Django and LeafletJS

<h3>Installation</h3>
<ul>
<li>Install <a href="http://nodejs.org/download/">node.js</a></li>
<li>Install SockJS <code>npm install sockjs</code></li>
<li>Install Express <code>npm install express</code></li>
<li>Install redis <code>npm install redis</code></li>
<li>Install http-server <code>npm install http-server</code></li>
<li>Install requirements for Django project <code>pip install requirements.txt</code>
</ul>

<h3>Getting Started</h3>
<ul>
<li>Start Django development server on port 8000 <code>python manage.py runserver 8000</code></li>
<li>Run (in background) myserver.js script from folder nodejs_file <code>node myserver.js</code>
<li>Start celery deamon in beat mode <code>python manage.py celeryd -v 2 -B -s celery -E -l INFO</code></li>
</ul>

When you have installed all dependencies and started your development server (with neccessary scripts running in background) you can check your real-time map demo by going at http://127.0.0.1:8000/  

More info coming soon ...

<h3>License</h3>
MIT Licensed. See LICENSE.md
