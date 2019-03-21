<!DOCTYPE HTML>
<!--
	Projection by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>SAFECON 2019 Hosted by Wisconsin Flying Team</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="https://use.typekit.net/chi0suc.css">
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/clock.css" />
		<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" />
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/countdown.js" type="text/javascript"></script>
		<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133810521-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-133810521-1');
		</script>
	</head>
	<body class="subpage">

		<!-- Header -->
			<?php require_once "header.php"; ?>

		<!-- Three -->
			<section id="three" class="wrapper">
				<div class="inner">
					<header class="align-center">
						<h2>Hotel Information</h2>
					</header>
					<div id="leaflet-map"></div>
					<h3>Hotels With Blocked Rooms</h3>
					<div class="row" id="blocked-hotels">
						<div id="hotels1" class="6u 6u(medium) 12u$(small)"></div>
						<div id="hotels2" class="6u 6u(medium) 12u$(small)"></div>
					</div>
					<h3 style="margin-top: 30px">Other Hotels in Area</h3>
					<p>Please refer to hotel websites to verify pricing as it may change.  We are still in the process of securing group rates for some of the following hotels, so continue checking this page for updates.</p>
					<div class="row" id="nonblocked-hotels">
						<div id="hotels1" class="6u 6u(medium) 12u$(small)"></div>
						<div id="hotels2" class="6u 6u(medium) 12u$(small)"></div>
					</div>
				</div>
			</section>

		<!-- Footer -->
			<?php require_once "footer.php"; ?>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			<script src="assets/js/hotels.js"></script>
	</body>
</html>