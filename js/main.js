function genEmail() {
	var e = ["hello","@","jamierobertson",".io"].join("");
	return e;
}

function buildPie(data) {
	// Define the same colors that TrH uses 
	var colors = {
		'iOS': '#53BBB4',
		'Android': '#5cb860',
		'PHP': '#838CC7',
		'Development Tools': '#637a91',
		'Python': '#f092b0',
		'Databases': '#eb7728',
		'CSS': '#3079AB',
		'HTML': '#39ADD1',
		'Design': '#e59a13', 
		'JavaScript': '#c25975',
		'Game Development': '#20898c', 
		'Ruby': '#e15258'
	}

	// Make array of TrH points
	var pointsArray = []
	for (var key in data) {
		// Remove things I dont have points in + total
		if (key != 'total' && data[key] != 0) {
			var o = { key: key, value: data[key] }
			pointsArray.push(o)	
		}
	}
	console.log(pointsArray);
}

jQuery(function($) {
	// mail me:
	var e = genEmail(), 
		$e = $('#e');

	$.getJSON('https://teamtreehouse.com/jamierobertson.json', function(data) {	
		buildPie(data.points);
	});

});
