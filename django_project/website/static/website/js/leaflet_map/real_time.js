var sockjs = new SockJS('http://127.0.0.1:5000/demo');
sockjs.onopen    = function() {
    console.log("opened");
    sockjs.send("demo channel connection opened");
};
sockjs.onmessage = function(e) {
    console.log("Message: " + e.data)
    try { 
      var message = JSON.parse(e.data);
      lat=message[0]
      lon=message[1] 

      DisplayNewPosition(lat, lon);      
    }
    catch(err) {
      console.log("Error");
    }
};
sockjs.onclose   = function() {
    console.log('Closing Connection.');
};


function DisplayNewPosition(lat,lng) {   
  if (typeof marker != 'undefined') {
    map.removeLayer(marker);  // delete previous marker
  }
  marker = L.marker([lat,lng]).addTo(map); 
  popupContent = "<p><strong>Lat: </strong> " +  lat + "<br><strong>Lon: </strong>" + lng + "</p>";
  marker.bindPopup(popupContent).openPopup();   
  map.setView(new L.LatLng(lat, lng), 15);                 
}  
