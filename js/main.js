function rot13(s) {
    function replaceChar(c) {
        return String.fromCharCode(
            (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0)+13) ? c : c-26
        );
    }
    return s.replace(/[a-zA-Z]/g, replaceChar);
}

function genEmail() {
    var e = [rot13('uryyb.wnzvr'), '&commat;', rot13('cebgbaznvy.pbz')].join('');
    return e;
}

function renderPieChart(el, pieData, callback) {
    el.highcharts({
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
                innerSize: '55%',
                startAngle: 0 // useful for reason users chart
            }
        },
        series: [{
            data: pieData
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

    if (typeof callback === 'function') {
        callback();
    }
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
}

// jQuery(function($) {

//     var $TrhChart = $('#TrhChart');

//     // Contact me
//     // http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/
//     $('.e-hidden').append(genEmail());


//     var currentDate = new Date(),
//         june2021 = new Date('June 1, 2021'),
//         timeDifferenceStem = currentDate.getTime() - june2021.getTime(),
//         yearsStem = timeDifferenceStem / (1000 * 60 * 60 * 24 * 365.25);
//     $('#yearsStem').append(`(${yearsStem.toFixed(1)} years)`);

//     // Treehouse request
//     // function renderTreehouse() {
//     //     $.ajax({ 
//     //         type: 'GET',
//     //         url: 'https://teamtreehouse.com/jamierobertson.json',
//     //         dataType: 'json', 
//     //         success: function(data) { 
//     //             var pointsArray = buildPie(data.points);
//     //             // console.log(pointsArray);
//     //             renderPieChart($TrhChart, pointsArray);
//     //         }
//     //     });
//     // }
//     // if ($TrhChart.length) {
//     //     renderTreehouse();
//     // }

//     // Duoliingo request
//     // $.getJSON('https://duolingo.com/users/jamie607910?jsoncallback=?', function(data) {
//     // });

//     // $('body').append('<iframe src="https://github.com/users/JamieRobertson/contributions/"></iframe>');
    
//     // $.getJSON('https://api.github.com/users/JamieRobertson/repos', function(data) {
//     //     $('#reposCount').append(data.length + ' <span>repositories</span>');
//     // });

// });

function onLoad(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

onLoad(function () {
    var e = document.querySelectorAll('.e-hidden');
    if (e.length) {
        e.forEach(($el, _) => {
            $el.innerHTML = `<a href="mailto:${genEmail()}">${genEmail()}</a>`;
        });
    }
});