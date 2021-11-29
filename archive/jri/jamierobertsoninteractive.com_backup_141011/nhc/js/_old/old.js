/*
*    UNUSED NHC 2014 JAVASCRIPT
*
*/




	// DONE WITH HANDLEBARS INSTEAD
	var appendJsonData = function () {
		var soundsystems = json.Soundsystems,
			stations = json.Stations,
			$markersAndList = $markers.add($list);

		for (var i = 0, len = soundsystems.length; i < len; i++) {
			$('<li><a data-index="'+ i +'" data-title="'+ soundsystems[i]['Title'] +'" data-content="'+ soundsystems[i]['Content'] +'" href="#">'+ soundsystems[i]['Title'] +'</a></li>"').appendTo($markersAndList);

		}
		// then append stations to canvas ($markers)
		for (var i = 0, len = stations.length; i < len; i++) {
			$('<li><a data-index="'+ i +'" data-title="'+ stations[i]['Title'] +'" data-content="'+ stations[i]['Content'] +'" href="#">'+ stations[i]['Title'] +'</a></li>"').appendTo($markers);
		}
	};
	appendJsonData();
	