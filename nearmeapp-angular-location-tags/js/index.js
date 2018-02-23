//module
var app = angular.module("NearMeApp", ['leaflet-directive']);

//controller
app.controller('MainCtrl', function($scope, Places) {
	//default map center
	$scope.mapCenter = {
		lat: 40.741934,
		lng: -74.004897,
		zoom: 17
	};
	
	Places.success(function(data) {
		$scope.mapMarkers = geodataToMarkers(data);
	});
	
	
	
});
//services
app.service('Places', function($http) {//json data
	return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK')
	.success(function(data) {
			return data;
	})
	.error(function(err) {
			return err;
	});
});

//display tag locations
var geodataToMarkers = function(geodata) {
  var places = geodata.query.geosearch;
  var markers = [];
  for(var i=0; i<places.length; i++) {
    place = {
      lat: places[i].lat,
      lng: places[i].lon,
      message: getMessage(places[i].title)
    }
    markers.push(place);
  }

  return markers;
}
//location tag to google maps
var getMessage = function(title) {
  var url = "https://www.google.com/maps/search/" + title;
  return "<a target='_blank' href='" + url + "'>" + title + "</a>";
}