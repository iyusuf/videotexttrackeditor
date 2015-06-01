//bladd
document.addEventListener("DOMContentLoaded", function () {  // don't run this until all DOM content is loaded 

	var track1 = document.getElementById("track1");
	track1.addEventListener("cuechange", function () {
		var myTrack = this.track;             // track element is "this" 
		var myCues = myTrack.activeCues;      // activeCues is an array of current cues.                                                    
		if (myCues.length > 0) {
			var disp = document.getElementById("text-display");
			disp.innerText = myCues[0].text ;
		}
	}, false);
	
	var track2 = document.getElementById("track2");
	track2.addEventListener("cuechange",function(){
		var gpsTrack = this.track;
		var gpsCues = gpsTrack.activeCues;
		if (gpsCues.length > 0){
			var dispgps = document.getElementById("text-gps");
			//dispgps.innerText = gpsCues[0].text;
			var gpsCue = gpsCues[0].text;
			var firstCueData = JSON.parse(gpsCues[0].text);
			dispgps.innerText = firstCueData.name + " at lat: " + firstCueData.lat + " and lon: " + firstCueData.lon;
			clickroute(firstCueData.lat, firstCueData.lon);
		}
	},false);
	
	var track3 = document.getElementById("track3");
	track3.addEventListener("cuechange", function () {
		var myTrack3 = this.track;             // track element is "this" 
		var myCues3 = myTrack3.activeCues;      // activeCues is an array of current cues.
		if (myCues3.length > 0) {	
			var disp = document.getElementById("text-temp");
			disp.innerText = myCues3[0].text ;
		}
	}, false);
	
	
	var track4 = document.getElementById("track4");
	var newImage = new Image();
	track4.addEventListener("cuechange", function () {
		var myTrack4 = this.track;             // track element is "this" 
		var myCues4 = myTrack4.activeCues;      // activeCues is an array of current cues.
		
		if (myCues4.length > 0) {	
			newImage = new Image();
			newImage.src = myCues4[0].text;
			var image = document.getElementById("imageid01");
			image.src = myCues4[0].text;
			
			
			
		}
	}, false);
	
	
}, false);      


var map=null;
function initialize() {
	var mapOptions = {
	  center: new google.maps.LatLng(29.879382, -95.588725),
	  zoom: 13
	};
	map = new google.maps.Map(document.getElementById("map-canvas"),
		mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

function clickroute(lat,lon) { //just omit the 'lati' and 'long'
	//var latLng = new google.maps.LatLng(29.884018, -95.583276);
	var latLng = new google.maps.LatLng(lat,lon);
	//map.panTo(latLng);
	map.setCenter(latLng);
}

function vidplay() {
   var video = document.getElementById("video1");
   var button = document.getElementById("play");
   if (video.paused) {
	  video.play();
	  button.textContent = "||";
   } else {
	  video.pause();
	  button.textContent = ">";
   }
}

	