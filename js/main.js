function genEmail() {
	var e = ["hello","@","jamierobertson",".io"].join("");
	return e;
}

function buildPie(data) {
	// Define the same colors that treehouse uses 
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
	};

	// Make array of treehouse points
	var pointsArray = []
	for (var key in data) {

		// Remove things I dont have points in + total
		if (key != 'total' && data[key] != 0) {
			var o = { name: key, y: data[key] }
		
			// Add corresponding colors to each topic
			for (var c in colors) {
				if (key == c) {
					o['color'] = colors[c];
				}
			}
			pointsArray.push(o)	
		}
	};

	return pointsArray;
};

jQuery(function($) {
	// mail me:
	var e = genEmail(), 
		$e = $('#e');

	var $TrhChart = $('#TrhChart');
	
	$.getJSON('https://teamtreehouse.com/jamierobertson.json', function(data) {	
		var pointsArray = buildPie(data.points);
		
		$TrhChart.highcharts({
			chart: {
				type: 'pie'
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				pie: {
					animation: false,
					borderWidth: 0,
					center: ['50%', '50%'],
					cursor: 'pointer',
					dataLabels: {
						enabled: false
					},
					innerSize: '60%',
					startAngle: 0 // useful for reason users chart
				}
			},
			series: [{
				data: pointsArray
			}],
			tooltip: {
				style: { 'color': '#eee', 'cursor': 'default', 'fontSize': '12px', 'padding': '10px', 'pointerEvents': 'none', 'whiteSpace': 'nowrap'},
				backgroundColor: 'rgba(40, 40, 40)',
				pointFormat: '<span style="color:{point.color}">\u25CF</span> points: <b>{point.y}</b><br/>'
			},
			title: {
				text: null
			}
		});
	});


	// $.getJSON('https://duolingo.com/users/jamie607910?jsoncallback=?', function(data) {	
	// 	console.log(data)
	// });

});
