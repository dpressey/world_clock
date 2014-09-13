(function() {

/*========================== NEW YORK CITY TIME ===================================*/

        // Function that holds all the logic for generating and displaying the time
        var nwyrkTime = function () {

            // instantiate the date object
            var crtNwyrk = new Date();

            // set the current hours, minutes, and seconds 
            var hours = crtNwyrk.getHours();
            var minutes = crtNwyrk.getMinutes();
            var seconds = crtNwyrk.getSeconds();

            //  Set the default meridian
            var meridian = "AM";

             // converting from 24 hour to 12 hour format
            if (hours > 12) {
                // currentHours = (currentHours over 12) - 12 hours
                hours -= 12;
                // set the meridian to PM
                meridian = "PM";
                // whenever the hour is "0" in UTC, set it to 12
            } else if (hours === 0) {
                hours = 12;
            }

             // Set the inner value of the paragraph tag with the current time in New York City
            var nwyrkTime = document.getElementById("nyc-time");
            nwyrkTime.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        };
        
/*===========================LONDON TIME CLOCK ==================================*/
        
        // passing in the converted time as an object
        var lndnTime = function (){

            // instantiate the new london date object
            var lndnDate = new Date(2014, 9, 13, 12, 50, 15);

            // get the hours for london
            var lndnHours = lndnDate.getHours();
            
            //  Set the default meridian
            var meridian = "AM";
            
             // converting from 24 hour to 12 hour format
            if (lndnHours === 0) {
            	lndnHours = 12;
            } else if (lndnHours > 12) {
            	lndnHours -= 12;
            }
            
            // grab the other time attributes
            var lndnMinutes = lndnDate.getMinutes();
            var lndnSeconds = lndnDate.getSeconds();


            // Set the inner value of the paragraph tag with the current time in London
            var lndnId = document.getElementById("london-time");
            lndnId.innerHTML = lndnHours + ":" + lndnMinutes + ":" + lndnSeconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        }

/*============================ TOKYO TIME CLOCK ====================================*/

        var tkyTime = function (){

            var tkyDate = new Date();

            // Instead of adding hours to the current 24 hour format, subtract hours from it
            // to implement the inverse of the current time (new york city)
            var tkyHours = tkyDate.getHours() - 11;

            var tkyMinutes = tkyDate.getMinutes();
            var tkySeconds = tkyDate.getSeconds();

            // set the meridian
            var meridian = "AM";

            if (tkyHours > 12){
                tkyHours -= 12;

                // change meridian
                meridian = "PM";
            } else if (tkyHours === 0){
                tkyHours = 12;
            }

            // set the inner value fo the paragraph tag with the current time in london
            var tkyId = document.getElementById("tokyo-time");
            tkyId.innerHTML = tkyHours + ":" + tkyMinutes + ":" + tkySeconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        };

/*=============================== SYDNEY TIME CLOCK ==================================*/
    var sydnyTime = function (){

            var sydnyDate = new Date();

            // Instead of adding hours to the current 24 hour format, subtract hours
            // to implement the inverse of the current time (new york city)
            var sydnyHours = sydnyDate.getHours() - 10;

            var sydnyMinutes = sydnyDate.getMinutes();
            var sydnySeconds = sydnyDate.getSeconds();

            // set the meridian
            var meridian = "AM";

            if (sydnyHours > 12){
                sydnyHours -= 12;

                // change meridian
                meridian = "PM";
            } else if (sydnyHours === 0){
                sydnyHours = 12;
            }

            // set the inner value fo the paragraph tag with the current time in london
            var sydnyId = document.getElementById("sydney-time");
            sydnyId.innerHTML = sydnyHours + ":" + sydnyMinutes + ":" + sydnySeconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        };

/*========================== BOUNCER FUNCTION =======================================*/

         // create bouncer function
        var bouncer = function () {

            window.setTimeout(nwyrkTime, 500);

            /* Passing in the "converted hours" argument is always necessary 
             500 milliseconds is needed because the callbacks also use 500 milliseconds to make a call to bouncer
             And both times total 1000 milliseconds, which is the 1 second delay that is desired. */

            window.setTimeout(lndnTime, 500);
            window.setTimeout(tkyTime, 500);
            window.setTimeout(sydnyTime, 500);
        };


/*========================== EXECUTE FUNCTIONS =====================================*/

        nwyrkTime();
        lndnTime();
        tkyTime();
        sydnyTime();
        bouncer();
})();
