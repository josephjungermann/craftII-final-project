const mymap = L.map('covidMap').setView([40.712, -74.006], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoiam9zZXBoanVuZ2VybWFubiIsImEiOiJjazl5b3lldHUwMGF1M21wYWZxZGxtaXFrIn0.SIGcJf1ElkmPBC0Gs31ktw'
}).addTo(mymap);