<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<title>Notting Hill Carnival App 2014</title>

	<script type="text/javascript" src="lib/modernizr.nhc.js"></script>
	<script type="text/javascript" src="lib/handlebars.min.js"></script>
	<script type="text/javascript" src="lib/iscroll.js"></script>

	<link rel="stylesheet" type="text/css" href="css/foundation.min.css">
	<link rel="stylesheet" type="text/css" href="css/nhc-14.css">
	<!--favicon
		apple icons
	-->
	<style type="text/css">
		body {
			/*
			overflow: hidden;
			*/
		}
		#header {
			position: fixed;
		}
		#header .site-title {
			text-align: center;
		}
		#markers li {
			display: inline-block;
		}
			#markers li a {
				display: block;
				width: 8px;
				height: 8px;
				background-color: crimson;
				margin-right: 4px;
				
			}
			#markers li a span {
				text-indent: -99999px;
				display: none;
			}
			#markers li a:hover {
				text-indent: 0px;
			}
		#overlay {
			/*display: none;*/
		}
	</style>
</head>
<body>
	<script type="text/javascript">if (window.devicePixelRatio > 1){document.body.className = 'highres';}</script>


	<div id="mainContent">

			<header id="header">
				<a id="sideBarTrigger" href="#"></a>
				<h1 class="site-title"><i></i><span>@NHCarnival2014</span></h1>
				<a id="share" href="#"></a>
			</header>


			<div id="map">
				<ul id="markers"></ul>
				<script id="markers-template" type="x-handlebars-template">
					{{#each this}}
						<li><a data-index="{{{@index}}}" data-title="{{{Title}}}" data-content="{{{Content}}}" href="#"><span>{{{Title}}}</span></a></li>
					{{/each}}
				</script> 

				<ul id="stations"></ul>
					<script id="stations-template" type="x-handlebars-template">
						{{#each this}}
							<li><a data-title="{{{Title}}}" data-content="{{{Content}}}" href="#"><span>{{{Title}}}</span></a></li>
						{{/each}}
					</script> 
				
				<ul id="utilities"></ul>
			</div>


			<div id="infoWindow">
				<div class="close"></div>
				<div class="inner">
					<h3>Gladdy Wax's Roadshow</h3>
					<p>Wmmmm mmmmm mmmmm mm mmm mmmmm. Wmm mmmm mm mmmm m mmmmm mm mmm. Wmmm mm m mmmmmm mmmmmmmm mmmmmmm mm Wmmmmmm. Wmmm mm m Wmmm Wmmmm Wmmmmmm.</p>
				</div>
			</div>


			<div id="overlay">
				<div class="close"></div>
				<div class="row">
					<div class="large-12 small-12 columns twitter">

						<header>
							<img class="avatar" src="img/twitter_icon.png" />
							<strong class="fullname">NottingHillCarnival</strong>
							<span class="username"><a href="https://twitter.com/NHCarnival2014" target="_blank">@NHCarnival2014</a></span>
						</header>

						<?php 
							require_once('lib/TwitterAPIExchange.php');
									
							$settings = array(
							    'oauth_access_token' => "216145264-2a7NNhGj5dpQHtt9e4sT8oQYZ7OIm5zGkefi1UqK",
							    'oauth_access_token_secret' => "cHhLSfc8DpbJE9NO46b6XG5YB1BQOnuNFA7jYGrQTExSu",
							    'consumer_key' => "856pcG0RPNTaLWEJrhtEYw",
							    'consumer_secret' => "KkLUap4DqjZU5vw8C9WCfg7PdSJbHUUSV2SH2yE"
							);

							$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
							$getfield = '?screen_name=NHCarnival2014&count=10';
							$requestMethod = 'GET';

							$twitter = new TwitterAPIExchange($settings);
							
							$twitter->setGetfield($getfield)
							        ->buildOauth($url, $requestMethod);
							        //->performRequest();

							$json = json_decode( $twitter->performRequest(), true );

							foreach ($json as $obj => $arr) {

								$retweets = $arr['retweet_count'];
								$favourites = $arr['favorite_count'];
								$date = date( 'M d', strtotime( $arr['created_at'] ) );
								
								echo 
								'<div class="tweet">
									<p class="tweet-text">'. $arr['text'] .'</p>
									<small class="time">'. $date .'</small>';

								if ( $retweets == 1 ) {
									echo '<small class="meta">'. $retweets .'retweet</small>';
								} elseif ( $retweets > 1 ) {
									echo '<small class="meta">'. $retweets .'retweets</small>';
								};

								if ( $favourites == 1 ) {
									echo '<small class="meta">'. $favourites .'favourite</small>';
								} elseif ( $favourites > 1 ) {
									echo '<small class="meta">'. $favourites .'favourites</small>';
								};
									
								echo 
								'</div>';
							
							};
						?>
						
						</div>
					</div>
					<div class="large-12 small-12 columns tfl" id="tfl">
						<ul>
						</ul>
					</div>
					<div class="large-12 small-12 columns">

						<h3>The Notting Hill Carnival: <br />24<sup>th</sup> &amp; 25<sup>th</sup> August</h3>
						<?php
							$date = strtotime("August 24, 2014 12:00 AM");
							$remaining = $date - time();
							$days_remaining = floor($remaining / 86400);
							$hours_remaining = floor(($remaining % 86400) / 3600);
							$min_remaining = floor(($remaining % 3600) / 60);
							$sec_remaining = ($remaining % 60);
							echo '<h3 id="countdown"><span id="days">'. $days_remaining .'</span><span id="hours">'. $hours_remaining .'</span><span id="mins">'. $min_remaining .'</span><span id="secs">'. $sec_remaining .'</span></h3>';
						?>
						
						<hr />
						<p>
							<b>Credits:<b> <br />
							<a href="https://twitter.com/FrankyAthill" target="_blank">Franky</a> <br />
							<a href="http://www.jamierobertsoninteractive.com" target="_blank">Jamie</a> <br />
							<a href="" target="_blank">Adlai</a> <br />
							<a href="http://www.craftsmanindustries.co.uk/" target="_blank">Craftsman Industries</a>
						</p>


					</div>
				</div>
			</div>


			<footer id="footer">
				<p>Want to know where you are? <a href="#">Use this as a mobile app</a></p>
			</footer>

	</div>



	<div id="sidebar">

			<input id="search" />

			<div id="wrapper">
				<div id="scroller">
					<ul id="list"></ul>
					<script id="list-template" type="x-handlebars-template">
						{{#each this}}
							<li><a data-index="{{{@index}}}" data-title="{{{Title}}}" data-content="{{{Content}}}" href="#">{{{Title}}}</a></li>
						{{/each}}
					</script> 
				</div>
			</div>

			<ul id="info"><li><a href="#">More information...</a></li></ul>

	</div>



	<script type="text/javascript">
		Modernizr.load({
			load: "http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js",
			complete: function () {
				if ( !window.jQuery ) {
					Modernizr.load('lib/jquery-2.1.0.min.js');
				}
			}
		});
	</script>

	

	<script type="text/javascript">
		Modernizr.load({
		  test: Modernizr.svg && Modernizr.canvas && Modernizr.csstransforms,
		  yep: 'js/app.js',
		  nope: 'js/oldBrowser.js'
		});
	</script>

	<script type="text/javascript" src="lib/fastclick.min.js"></script>

	<!-- analytics here -->

</body>
</html>