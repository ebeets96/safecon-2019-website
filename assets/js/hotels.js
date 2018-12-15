// JavaScript Document
var scrollToHotel;

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

function compareHotels (a, b) {
	if(a.name < b.name)
		return -1;
	if(b.name < a.name)
		return 1;
	
	return 0;
}

function scrollToHotel(index) {
	$('html, body').animate({
		scrollTop: $("#hotel" + index).offset().top - 300
	}, 1000);
	
	setTimeout(function() {
		$("#hotel" + index).toggleClass("highlight");
	}, 1000);
	
	setTimeout(function() {
		$("#hotel" + index).toggleClass("highlight");
	}, 2000);
}
			   
$(document).ready(function(){
	var d = $.getJSON("hotels.json", function(data){
		var hotels = data.hotels.sort(compareHotels);
		var numInCol1 = Math.ceil(hotels.length / 2);
		var popups = [];
		
		$.each(hotels, function(index, value) {
			var latlng = L.latLng(value.location.lat, value.location.lng);
			
			var popupHTML = `
				<strong>${value.name}</strong><br />
				${value.address}<br />
				${value.price}<br />
				<a href="javascript:void(0);" onclick="scrollToHotel(${index})" class="see-hotel-details">See details</a>
			`;
			
			var currPopup = L.marker(
				[value.location.lat, value.location.lng]
			).bindPopup(popupHTML).addTo(map);
			
			popups.push(currPopup);
			
			var hotelHTML = `
				<div class="hotel" id="hotel${index}">
					<div class="hotel-info">
						<span class="hotel-title">${value.name}</span>
						<span class="hotel-address">${value.address}</span>
						<span class="hotel-phone">${value.phone}</span>
						<span class="hotel-price">${value.price}</span>
						<span class="hotel-details">${value.breakfast}</span>
						</div>
						<div class="hotel-links" data-index="${index}">
							<a href="${value.website}" target="_blank" title="Visit hotel website" class="hotel-website"><i class="fa fa-link"></i></a>
							<a href="javascript:void(0);" title="View on map" class="hotel-show-on-map"><i class="fa fa-globe"></i></a>
						</div>
					</div>
			`;
			
			if(index < numInCol1) {
				$("#hotels1").append(hotelHTML);
			} else {
				$("#hotels2").append(hotelHTML);
			}
		})
		
		$(".hotel-links .hotel-show-on-map").click(function() {
			var index = $(this).parent().data("index");
			var latlng = popups[index].getLatLng();
			
			$('html, body').animate({
				scrollTop: $("#leaflet-map").offset().top - 100
			}, 1000);
			
  			map.flyTo(latlng, 14);
			popups[index].openPopup();
		})
	});
});