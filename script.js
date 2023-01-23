var mymap = L.map('map').setView([38.63629, -90.23640], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker1 = L.marker([38.635, -90.237]).addTo(mymap);
marker1.bindPopup("<b>Resturant 1</b><br>Humphreys").openPopup();

var marker2 = L.marker([38.627, -90.255]).addTo(mymap);
marker2.bindPopup("<b>Resturant 2</b><br>Gramophone").openPopup();

var marker3 = L.marker([38.668, -90.587]).addTo(mymap);
marker3.bindPopup("<b>Store 1</b><br>Tesla").openPopup();

var marker4 = L.marker([38.629, -90.292]).addTo(mymap);
marker4.bindPopup("<b>Brewery 1</b><br>Heavy Riff").openPopup();

var marker5 = L.marker([38.554, -90.319]).addTo(mymap);
marker5.bindPopup("<b>Restaurant 3</b><br>9 Mile Garden").openPopup();
