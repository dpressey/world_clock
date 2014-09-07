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
                hours -= 12;
                meridian = "PM";
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

        // Convert New York City time to London, Tokyo, and Sydney time
        var convertTime = function (){

            // instantiate the nyc date object
            var nwyrkDate = new Date();

            var lndnHours= nwyrkDate.getHours() + 5;
            var tkyHours = nwyrkDate.getHours() + 8;
            var sydnyHours = nwyrkDate.getHours() + 9;

            return {hours: [lndnHours, tkyHours, sydnyHours]};
        };
        // Accessing the object: cnvrtdHours.hours[0]
        var cnvrtdHours= convertTime();
        
/*===========================LONDON TIME CLOCK ==================================*/

        var lndnTime = function (cnvHour){
            var localDate = new Date();

            var lndnHours = localDate.getHours() - cnvHour.hours[0];



            var lndnMinutes = localDate.getMinutes();
            var lndnSeconds = localDate.getSeconds();

            //  Set the default meridian
            var meridian = "AM";


            // converting from 24 hour to 12 hour format
            if (lndnHours > 12) {
                lndnHours -= 12;
                meridian = "PM";
            } else if (lndnHours === 0) {
                lndnHours = 12;
            }

            // Set the inner value of the paragraph tag with the current time in London
            var lndnTime = document.getElementById("london-time");
            lndnTime.innerHTML = lndnHours + ":" + lndnMinutes + ":" + lndnSeconds + " " + meridian;

            // call the bouncer function per 0.5 second
            window.setTimeout(bouncer, 500);
        }

/*========================== BOUNCER FUNCTION =======================================*/

         // create bouncer function
        var bouncer = function () {
            window.setTimeout(nwyrkTime, 500);
            window.setTimeout(lndnTime(cnvrtdHours), 500);
        };


/*========================== EXECUTE FUNCTIONS =====================================*/

        nwyrkTime();
        lndnTime(cnvrtdHours);
        bouncer();
})();