var express = require('express');
var sockjs = require('sockjs');
var http = require('http');
var redis = require('redis');


var sockjs_server = sockjs.createServer(
    {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js"}
);

sockjs_server.on('connection', function(connection) {

    connection.on('data', function(message) {

        var client = redis.createClient();  
        var subscribe_channel = 'channel_demo'
	    client.subscribe(subscribe_channel);
        console.log("New channel:"+subscribe_channel)

	    client.on("message", function(channel, message){
	        connection.write(message);
	    });
    });

});

var my_app = express();
var server = http.createServer(my_app);

sockjs_server.installHandlers(server,
    {prefix:'/demo'}
);
 
server.listen(5000, 'localhost'); 
