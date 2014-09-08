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


/*========================= TIME CONVERTER FUNCTION =============================*/

/*
        // Convert New York City time to London, Tokyo, and Sydney time
        var convertTime = function (){

            // instantiate the nyc date object
            var nwyrkDate = new Date();

            // set each city's hour differential based on new york city time
            var lndnHours= nwyrkDate.getHours() + 5;
            var tkyHours = nwyrkDate.getHours() + 8;
            var sydnyHours = nwyrkDate.getHours() + 9;

            // return an object of arrays for each city's current time
            return {hours: [lndnHours, tkyHours, sydnyHours]};
        };
        // Accessing the object: cnvrtdHours.hours[0]
        var cnvrtdHours= convertTime();
*/
        
/*===========================LONDON TIME CLOCK ==================================*/
        
        // passing in the converted time as an object
        var lndnTime = function (){

            // instantiate the new london dat object
            var lndnDate = new Date();

            // for proper conversion, add five hours to London's time
            var lndnHours = lndnDate.getHours() + 5;

            var lndnMinutes = lndnDate.getMinutes();
            var lndnSeconds = lndnDate.getSeconds();

            //  Set the default meridian
            var meridian = "AM";


            // converting from 24 hour to 12 hour format
            if (lndnHours > 12) {
                // this will show the time as negative
                lndnHours -= 12;
                meridian = "PM";
            } else if (lndnHours === 0) {
                lndnHours = 12;
            }

            // Set the inner value of the paragraph tag with the current time in London
            var lndnId = document.getElementById("london-time");
            lndnId.innerHTML = lndnHours + ":" + lndnMinutes + ":" + lndnSeconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        }

/*============================ TOKYO TIME CLOCK ====================================*/

        var tkyTime = function (){

            var tkyDate = new Date();

            // using the object to convert the hours for tokyo
            var tkyHours = tkyDate.getHours() +13;

            var tkyMinutes = tkyDate.getMinutes();
            var tkySeconds = tkyDate.getSeconds();

            // set the meridian
            var meridian = "PM";

            if (tkyHours > 12){
                tkyHours -= 12;

                // change meridian
                meridian = "AM";
            } else if (tkyHours === 0){
                tkyHours = 12;
            }

            // set the inner value fo the paragraph tag with the current time in london
            var tkyId = document.getElementById("tokyo-time");
            tkyId.innerHTML = tkyHours + ":" + tkyMinutes + ":" + tkySeconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        };




/*========================== BOUNCER FUNCTION =======================================*/

         // create bouncer function
        var bouncer = function () {
            window.setTimeout(nwyrkTime, 500);
            // Passing in the "converted hours" argument is always necessary 
            // 500 milliseconds is needed because the callbacks also use 500 milliseconds to make a call to bouncer
            // And both times total 1000 milliseconds, which is the 1 second delay that is desired.
            window.setTimeout(lndnTime(cnvrtdHours), 500);
            window.setTimeout(tkyTime(cnvrtdHours, 500))
        };


/*========================== EXECUTE FUNCTIONS =====================================*/

        nwyrkTime();
        lndnTime();
        tkyTime();
        bouncer();
})();