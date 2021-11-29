/*
*    JAVASCRIPT FOR NOTTING HILL CARNIVAL APP 2014
* 
*/

//var myScroll;

jQuery(function($) {
	
	// Define Global variables
	var $mainContent = $("#mainContent"),
			$markers = $mainContent.find("#markers"),
			$stations = $mainContent.find("#stations"),
		$sideBarTrigger = $("#sideBarTrigger"),
		$sidebar = $("#sidebar"),
			$search = $sidebar.find("#search"),
			$list = $sidebar.find("#list"),
			$about = $sidebar.find("#about"),
		$infoWindow = $("#infoWindow"),
			$closeInfoWindow = $infoWindow.find(".close"),
		$overlay = $("#overlay"),
			$closeOverlay = $overlay.find(".close"),
			$tflOutput = $overlay.find("ul");


	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


	// iscroll - maybe delay for 200 milliseconds?
	/*
	setTimeout(function () {
		var myScroll = new IScroll('#wrapper', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: true,
	    	momentum: true,
	    	bounce: true
		});
	}, 200);
	*/
	

	

	// Possible map options :    enable free scroll , disable bounce back
	// Scroll to function :    myScroll.scrollTo(0, -100);    myScroll.scrollTo(0, -100, 1000, IScroll.utils.ease.elastic);
	// This is incredible :    scrollToElement(el, time, offsetX, offsetY, easing)
	

	// 1: Splash screen + Lazy load map + other content



	// 2: Load data + Append Soundsystems / Tube stations


	/****************************************************************************************************/

	var utilitiesData = null;
	var fallbackData = null;


	// Try loading from server - is this timeout too short? - datatype jsonp did not work
	//     Priorities ( for Cordova only ) :
	//     1: From server?
	//     2: From local storage?
	//     3: From fallback variable?
	var json = (function () {
	    var json = null;
	    $.ajax({
	        async: false,
	        global: false,
	        url: 'json/data.json',
	        dataType: 'json',
	        timeout: 5000,
	        success: function (data) {
	            json = data;

	        },
	        error: function () {
	        	console.log("json error");
	        	// json = fallbackData;

	        },
	        complete: function () {
	        	onComplete();
	        }
	    });
	    return json;
	}());

	function onComplete() {
		/*
		setTimeout(function () {
			myScroll.refresh();

		}, 0);
		*/
		console.log("ajax completed");
	};
	


	var tfl = (function () {

		var tfl = null;
		$.ajax({
			type: 'get',		
			url: 'tfl/tfl.php',
			success: function (data) {
				tfl = data;
				$tflOutput.append(data);

			},
			error: function (data) {
				console.log("tfl error");
				console.log(data);
			}
		});
		return tfl;
		
	}());



	// Handlebars templates
	var appendJsonData = function () {
		var soundsystemsData = json.Soundsystems,
			stationsData = json.Stations,
			listTemplateScript = $("#list-template").html(),
			markersTemplateScript = $("#markers-template").html(),
			stationsTemplateScript = $("#stations-template").html();
			
		//Compile the list template
	    var listTemplate = Handlebars.compile( listTemplateScript );
	    $list.append(listTemplate( soundsystemsData ));

	    //Compile the markers template
	    var markersTemplate = Handlebars.compile( markersTemplateScript );
	    $markers.append(markersTemplate( soundsystemsData ));

	    //Compile the stations template
	    var stationsTemplate = Handlebars.compile( stationsTemplateScript );
	    $stations.append(stationsTemplate( stationsData ));

	};
	appendJsonData();

	

	



	

	// 5: Toggle sidebar and Info window functions
	//    1: Click on list item / pointer
	//    2: Search json array for "data-index": each? / map? / grep?
	//       OR search dom?
	//	  3: center map and close sidebar
	//    4: Append correct Title & Content

	/****************************************************************************************************/

	// one toggle function for everything
	var toggle = function(element) {
		element.toggleClass( "active" ); 
	};

	var infoWindowData = function(title, content) {
		console.log( title +" "+ content );
		if ( $infoWindow.hasClass("active") ) { $infoWindow.removeClass("active") };
		$infoWindow.html("<h3>"+ title +"</h3><p>"+ content +"</p>");
		toggle( $infoWindow );

	};

	var centerMap = function() {
		console.log("pass latitude and longitude here");
	};



	// 6: EVENT LISTENERS
	/****************************************************************************************************/

	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);


	$sideBarTrigger.on('click', function(e) {
		e.preventDefault();
		$(this).addClass("selected");
		toggle($sidebar);
	});


	$list.on('click', 'a', function(e) {
		e.preventDefault();

		var title = $(this).attr("data-title"), 
			content = $(this).attr("data-content");

		toggle( $sidebar );

		centerMap();
		infoWindowData( title, content );
	});

	// markers have hover events attached - maybe do it with coordinates?
	// OR NOT IF TOO MUCH HASSLE
	// 
	$markers.add($stations).on('click', 'a', function(e) {
		e.preventDefault();

		var title = $(this).attr("data-title"), 
			content = $(this).attr("data-content");

		// give hover effect to markers - do this some other time
		// $(this).addClass("selected").parent().siblings().removeClass("selected");

		if ( $sidebar.hasClass("active") ) { $sidebar.removeClass("active") };

		centerMap();
		infoWindowData( title, content );
	});


	$about.on('click', function() {
		if ( $overlay.hasClass("active") ) { 
			return false;
		} else {
			toggle( $overlay );
			return false;
		}
	});


	$closeOverlay.on('click', function(e) {
		e.preventDefault();
		toggle( $overlay );
	});


	$closeInfoWindow.on('click', function(e) {
		e.preventDefault();
		toggle( $infoWindow );
	});



	// interesting - http://benalman.com/news/2010/11/immediately-invoked-function-expression/
				
				

});