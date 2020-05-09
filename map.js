// Set const to import map template and set lon, lat and zoom point on page load
const mymap = L.map('covidMap').setView([40.712, -74.006], 7);

// Import map style tile layer from MapBox with api key
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/dark-v9',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoiam9zZXBoanVuZ2VybWFubiIsImEiOiJjazl5b3lldHUwMGF1M21wYWZxZGxtaXFrIn0.SIGcJf1ElkmPBC0Gs31ktw'
}).addTo(mymap);

// Add GeoJSON and for event click on marker, show data properties
function myEvent(feature, layer) {
	layer.bindPopup("<h1 class='infoHeader'>WARN Notice</h1><p class ='infoHeader'>Notice Date: " + feature.properties.NoticeDate + "</p><p class='infoHeader'>Reason: " + feature.properties.Reason + "</p><p class ='infoHeader'>Company: " + feature.properties.Company + "</p><p class ='infoHeader'>Address: " + feature.properties.Address + "</p><p class ='infoHeader'>Industry: " + feature.properties.Industry + "</p><p class ='infoHeader'>Total Employees Affected: " + feature.properties.TotalEmployeesAffected + "</p>");
};
L.geoJSON(warn, {
	onEachFeature: myEvent
}).addTo(mymap);