/**NONE OF MY FUNCTIONS WERE WORKING! IT'S BECAUSE I FORGOT TO ADD THE DOM CONTENT LOADED!
 * This ensures that the JAVASCRIPT WAITS FOR THE HTML TO LOAD BEFORE RUNNING.
 * omg im so stupid. 
 */
document.addEventListener("DOMContentLoaded", function () {
/**didn't know JS would stop running if it couldnt find the first thing ...in the code. Kinda like a conflict?
 * What a weird language
 * Adding the whole BACK TO TOP STUFF into an If statement, so the pages can check if such a button exists, then run the code
 * if it doesnt, then MOVE ON!
 */
    //CODING FOR THE SCROLL TO TOP BUTTON
    //Calling the button in the html by it's class name. 
    const toTopBtn = document.querySelector(".backToTopBtn");
    //then getting the root element so we can fix the button to a certain place in the document.
    var rootElement = document.documentElement;
    //This function will then handle the scrolling of the button. 
    if (toTopBtn) {
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
    }

    //DYNAMIC NAV BAR   
    /*Making a dynamic nav bar (hopefully this will stop the terrible glitching) using this tutorial: https://youtu.be/ThSaI0kuez8?si=wPBXZp8SJQuKwYbP
    //need to find the page location, using the page pathname..harder than i thought ( ͠° ͟ʖ ͡°) making a ref to the nav div and the currreent page
    */const navPlaceHolder = document.querySelector(".navbar-placeholdar");
    const currentPagePath = window.location.pathname;
    //NOW I NEED SMTH TO FIGURE OUT WHICH PAGE WE'RE ON, how deep it goes into the folders ૮(˶╥︿╥)ა
    //making a variable that will find and fill in the relevant reference path based on the current active page
    let basePagePath ="";
    

   //NEED toBe ABle to detect how deep the page is T^T omg,.... im struggling. right now this navigation only works on the main pages (in the nav bar), one folder deep.
   if (currentPagePath.includes("/portfolio/")) {
    basePagePath = "../";
    if (currentPagePath.includes("/portfolio/commissions")) {
        basePagePath = "../";
    }
    } else if (currentPagePath.includes("/blogs/") || currentPagePath.includes("/profile/") ||
        currentPagePath.includes("/essays/") ||currentPagePath.includes("/design/")) {
        basePagePath = "../";
    } else {
        basePagePath = "";
    }
    
    //Building the navigation layout! WHY CAN'T YOU ADD COMMENTS INTO THE THE BACKTICK??????? (`)
    const navHTML = `
      <nav class="navbar">
    <div class="sitenamelogo">
      <figure><img class="logo" src="${basePagePath}images/star-logo.png" alt="logo of a star on a fishhook"></figure>
      <h1 class="site-title"> Starfish <br> Galaxy </h1>
    </div>
    <!--Desktop navigation so it STOPS DISAPPEARING!-->
    <ul class="navlinks desktop-nav">
    <!--The homepage, when loaded from the direct github link is not recognised as an active page, 
    therefore making the home button in the nav clickable when the page loads with the 'https://kokostahr.github.io/DIGA300A/' 
    path from github. but the home page is recognised as active when loaded from the 'https://kokostahr.github.io/DIGA300A/index.html'
    path that I have set here. I am currently unsure how to set both paths to be recognised the main homepages... but it is something
    I will fix later, with guidance-->
      <li><a href="${basePagePath}index.html" data-page="index.html">Home</a></li>
      <li><a href="${basePagePath}blogs/blog-home.html" data-page="blog-home.html">Blogz</a></li>
      <li><a href="${basePagePath}profile/profilehomepage.html" data-page="profilehomepage.html">Profile</a></li>
      <li><a href="${basePagePath}essays/essays-homepage.html" data-page="essays-homepage.html">Essays</a></li>
      <li><a href="${basePagePath}design/design-homepage.html" data-page="design-homepage.html">Design</a></li>
      <li><a href="${basePagePath}portfolio/portfolio.html" data-page="portfolio.html">Portfolio</a></li>
      <li><a href="${basePagePath}portfolio/commissions.html" data-page="commissions.html">Commissions</a></li>
    </ul>
    
    <!--Hamburger nav for smaller screens-->
    <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <!--The overlay screen for smaller screens-->
    <div class="nav-overlay" id="nav-overlay">
        <button class="close-btn" id="close-btn">&times;</button>
        <ul class="navlinks mobile-nav">
      <li><a href="${basePagePath}index.html" data-page="index.html">Home</a></li>
      <li><a href="${basePagePath}blogs/blog-home.html" data-page="blog-home.html">Blogz</a></li>
      <li><a href="${basePagePath}profile/profilehomepage.html" data-page="profilehomepage.html">Profile</a></li>
      <li><a href="${basePagePath}essays/essays-homepage.html" data-page="essays-homepage.html">Essays</a></li>
      <li><a href="${basePagePath}design/design-homepage.html" data-page="design-homepage.html">Design</a></li>
      <li><a href="${basePagePath}portfolio/portfolio.html" data-page="portfolio.html">Portfolio</a></li>
      <li><a href="${basePagePath}portfolio/commissions.html" data-page="commissions.html">Commissions</a></li>
    </ul>
    </div>
  
  </nav>
    `;
    //calling the nav container inside the html, and assigning all this juicy stuff to it.
    navPlaceHolder.innerHTML = navHTML;

    //Adding the functionality for the close and open butttooonnnsss of the navbar
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("nav-overlay");
    const closeBtn = document.getElementById("close-btn");
    //open and closee the overlay
    if (hamburger && overlay && closeBtn) {
        hamburger.addEventListener("click", () => {
        overlay.classList.toggle("active");
    });
        closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
    });
    }
    //tHEN We need to find a way to detect the atcitve page, so that it can highlight the appropriate navlink
    const allDaLinks = document.querySelectorAll(".navlinks a");
    //This code is checking the name of the active page, and it will assign the 'active' class from the CSS to it, so 
    //that i can see which page...well, is active LOL. 
    allDaLinks.forEach(link => {
        const linkPage = link.getAttribute("data-page");
        if (currentPagePath.includes(linkPage)  && !currentPagePath.includes("/academic/") && !currentPagePath.includes("/design-pages/") 
         && !currentPagePath.includes("/essay-pages/")){
            link.classList.add("active");
        }
    })

    //Adding an pseudo animated background that looks like a bit like stars.... once again, these only work on the main/major pages IDK WHY!
    particlesJS('stars', {
        "particles": {
            "number": {
                "value": 80, // number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#fceea7" //hoveryeloow
            },
            "shape": {
                "type": "circle" //giving it a boring circle shape for now, until i firgue out how to make star shapes
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 6,
                "random": true
            },
            "line_linked": {
                "enable": false 
            },
            "move": {
                "enable": true,
                "speed": 0.5,
                "random": true, 
                "direction": "none",
                "out_mode": "out"  
            }
        },
        "interactivity": {
            "detect_on": "canvas", "events": {
                "onhover": {
                    "enable": false
                },
                "onclick": {
                    "enable": false
                }
            }
        },
        "retina_detect": true
    });

    particlesJS('shooting-stars', {
    "particles": {
        "number": { "value": 10, "density": { "enable": false } },
        "color": { "value": "#fceea7" },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.3, 
            "anim": {
                "enable": true,
                "speed": 0.7,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": { "value": 2 },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 2.4, "direction": "none", "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": false }, "onclick": { "enable": false } }
    },
    "retina_detect": true
    });
});








