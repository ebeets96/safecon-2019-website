// JavaScript Document
var map = L.map('leaflet-map', {
	center: [42.85, -89.2],
	zoom: 9
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiZWJlZXRzIiwiYSI6ImNqcG5jY3ZvaTAxa3A0MnBna2p3NTE4Mm0ifQ.ePLD6dH2fD-7UsQQUnw5VA'
}).addTo(map);

$(document).ready(function(){
	var d = $.getJSON("hotels.json", function(data){
		$.each(data.hotels, function(index, value) {
			var latlng = L.latLng(value.location.lat, value.location.lng);
			
			var popupHTML = `
				<strong>${value.name}</strong><br />
				${value.address}<br />
				${value.phone}<br />
				${value.price}<br />
				${value.room_types}<br />
			`;
			
			L.marker(
				[value.location.lat, value.location.lng]
			).bindPopup(popupHTML).addTo(map);
			
			var hotelHTML = `
				<div class="hotel">
					<div class="hotel-info">
						<span class="hotel-title">${value.name}</span>
						<span class="hotel-address">${value.address}</span>
						<span class="hotel-phone">${value.phone}</span>
						<span class="hotel-price">${value.price}</span>
						<span class="hotel-details">${value.breakfast}</span>
						</div>
						<div class="hotel-links">
							<a href="javascript:void(0);" title="Visit hotel website" class="hotel-website"><i class="fa fa-link"></i></a>
							<a href="javascript:void(0);" title="View on map" class="hotel-show-on-map"><i class="fa fa-globe"></i></a>
						</div>
					</div>
			`;
			
			$("#hotels").append(hotelHTML);
		})
	});
});