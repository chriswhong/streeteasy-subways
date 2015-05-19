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
            'case "1": return {color: "#ff0000"};',
            'case "2": return {color: "#ff0000"};',
        
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

