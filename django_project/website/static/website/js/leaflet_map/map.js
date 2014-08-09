/* Define base layers */
var cycleURL='http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png';
var cycleAttrib='Map data © OpenStreetMap contributors';
var opencyclemap = new L.TileLayer(cycleURL, {attribution: cycleAttrib}); 

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © openstreetmap contributors';
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib}); 

/* create new layer group */
var layer_apartments = new L.LayerGroup();
var array_markers = new Array();

/* create custom marker which will represent apartments in layer 'layer_apartments' */
customMarker = L.Marker.extend({
   options: { 
      title: 'Name of the apartment',
   }
});


/* create map object */
var map = L.map('map', {
	center: [44.1265, 15.225],
	zoom: 12,
	fullscreenControl: true,
	fullscreenControlOptions: {
		position: 'topleft'
	},
	layers: [opencyclemap,]
});

var baseLayers = {
	"OpenCycleMap": opencyclemap,
	"OpenStreetMap": osm
};


L.control.layers(baseLayers).addTo(map);


/* S I D E B A R  */
var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
});
map.addControl(sidebar);

// setTimeout(function () {
//     sidebar.show();
// }, 300);

$('#sidebar_control').click(function() {
    sidebar.show();
});

