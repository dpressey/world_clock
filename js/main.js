(function(){

	// Create Datetime objects for each city
	var crtSydy = new Date(2014, 8, 6, 4, 0, 0);
	var crtTky  = new Date(2014, 8, 6, 3, 0, 0);
	var crtLndn = new Date(2014, 8, 6, 7, 0, 0);
	var crtNwyrk  = new Date(2014, 8, 6, 2, 0, 0);


	//  Insert times into the DOM
	var insrtDom = function (){

		// set Sydney's time into the paragraph tag with it's css id
		var sydyTime = document.getElementById("sydney-time");
		sydyTime.innerHTML = crtSydy.getHours() + ":" + crtSydy.getMinutes() + ":" + crtSydy.getSeconds();
		
		// set Tokyo's time into the paragraph tag with it's css id
		var tkyTime = document.getElementById("tokyo-time");
		tkyTime.innerHTML = crtTky.getHours() + ":" + crtTky.getMinutes() + ":" + crtTky.getSeconds();

		// set London's time into the paragraph tag with it's css id
		var lndnTime = document.getElementById("london-time");
		lndnTime.innerHTML = crtLndn.getHours() + ":" + crtLndn.getMinutes() + ":" + crtLndn.getSeconds();

		// set New York City's time into the paragraph tag with it's css id
		var nwyrkTime = document.getElementById("nyc-time");
		nwyrkTime.innerHTML = crtNwyrk.getHours() + ":" + crtNwyrk.getMinutes() + ":" + crtNwyrk.getSeconds();

	}; insrtDom();



	//  Update seconds





	// Update minutes





	// Update hours
}) ();