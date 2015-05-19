chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		
		// ----------------------------------------------------------

    var actualCode = [
      'var m = SEMaps._maps.map;',
      'console.log(m);',
       'var district_boundary = new L.geoJson();',
        'district_boundary.addTo(m);',

        'jQuery.ajax({',
        'dataType: "json",',
        'url: "https://cwhong.cartodb.com/api/v2/sql?q=SELECT%20*%20FROM%20routes&format=geojson",',
        'success: function(data) {',
        'console.log(data)',
            'jQuery(data.features).each(function(key, data) {',
                'district_boundary.addData(data);',
            '});',
        'district_boundary.setStyle(function(feature){',
       ' switch (feature.properties.route_id) {',
            'case "1": return {color: "#EE352E"};',
            'case "2": return {color: "#EE352E"};',
            'case "3": return {color: "#EE352E"};',
            'case "4": return {color: "#00933C"};',
            'case "5": return {color: "#00933C"};',
            'case "6": return {color: "#00933C"};',
            'case "B": return {color: "#FF6319"};',
            'case "D": return {color: "#FF6319"};',
            'case "F": return {color: "#FF6319"};',
            'case "M": return {color: "#FF6319"};',
            'case "A": return {color: "#2850AD"};',
            'case "C": return {color: "#2850AD"};',
            'case "E": return {color: "#2850AD"};',
            'case "G": return {color: "#6CBE45"};',
            'case "J": return {color: "#996633"};',
            'case "Z": return {color: "#996633"};',
            'case "L": return {color: "#A7A9AC"};',
            'case "N": return {color: "#FCCC0A"};',
            'case "Q": return {color: "#FCCC0A"};',
            'case "R": return {color: "#FCCC0A"};',
            'case "S": return {color: "#808183"};',
            'case "7": return {color: "#A7A9AC"};',
        '}',
    '})',
        '}',
        '}).error(function() {});'   
          
    ].join('\n');

    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);
     

   // var geojsonFeature = {
    //     "type": "Feature",
    //     "properties": {
    //         "name": "Coors Field",
    //         "amenity": "Baseball Stadium",
    //         "popupContent": "This is where the Rockies play!"
    //     },
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-73.98, 40.77]
    //     }
    // };

    // // L.geoJson(geojsonFeature).addTo(map);


	}
	}, 10);
});

