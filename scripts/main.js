/**NONE OF MY FUNCTIONS WERE WORKING! IT'S BECAUSE I FORGOT TO ADD THE DOM CONTENT LOADED!
 * This ensures that the JAVASCRIPT WAITS FOR THE HTML TO LOAD BEFORE RUNNING.
 * omg im so stupid. 
 */
document.addEventListener("DOMContentLoaded", function () {
    //CODING FOR THE SCROLL TO TOP BUTTON
    //Calling the button in the html by it's class name. 
    const toTopBtn = document.querySelector(".backToTopBtn");
    //then getting the root element so we can fix the button to a certain place in the document.
    var rootElement = document.documentElement;
    /**This function will then handle the scrolling of the button. 
    *
    */
    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    //Want to add some juice, so a function that will make the back to top button fade in when the user scrolls a certain distance. 
    function scrollJuice() {
        /**adding the event listener to see if the user is scrolling on the page
         * if they do, and they scroll past a certain point, then show the button. if 
         * not, then keep the button hidden. 
         * In the css, I defined an active class for the back to top button.
        */
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                toTopBtn.classList.add("active");
            } else {
                toTopBtn.classList.remove("active");
            }
        })
    }

    //Now i am calling the function, so it works.
    scrollToTop();
    scrollJuice();
    //adding the function to the button now
    toTopBtn.addEventListener("click", scrollToTop);
});








