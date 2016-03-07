function genEmail() {
	var e = ["hello","@","jamierobertson",".io"].join("");
	return e;
}

function buildPie(data) {
	// Define the same colors that treehouse uses 
	var colors = {
		'Android': '#5cb860',
		'Business': '#F9845B',
		'C#': '#9e4d83',
		'CSS': '#3079AB',
		'Databases': '#eb7728',
		'Design': '#e59a13',
		'Development Tools': '#637a91',
		'Digital Literacy': '#c38cd4',
		'Game Development': '#20898c',
		'HTML': '#39ADD1',
		'iOS': '#53BBB4',
		'Java': '#2c9676',
		'JavaScript': '#c25975',
		'PHP': '#838CC7',
		'Python': '#f092b0',
		'Ruby': '#e15258',
		'Wordpress': '#838CC7'
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
					animation: true,
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
