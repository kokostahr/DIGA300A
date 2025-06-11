document.addEventListener("DOMContentLoaded", function () {
    //declaring all the variables yeah!
    const track = document.querySelector(".carousel-track");
    const items = Array.from(track.children);
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    //starting at 0 for the items in the caro
    let currentIndex = 0;
    //findind the width of each caro item 
    let slideWidth;

    //ensuring that width is calculated after all the caro items are loaded in
    window.addEventListener("load", () => {
        slideWidth = items[0].getBoundingClientRect().width;
        //position each item horizontally
        items.forEach((item, index) => {
            item.style.left = `${slideWidth * index}px`;
        })
    })
    
    //variable and function that will make the caro move 
    function updateCarousel() {
        //const width = track.getBoundingClientRect().width;
        /**had an issue where the items were stacking in one carousel slide, making a change to this code to 
         * ensure that the js gets the APPROPRIATE width of each item! ples work
         */
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
    console.log('prev', prevButton);
    console.log('next', nextButton);

    //Give the buttons functionalities
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
        resetAutoplay();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
        resetAutoplay();
    })

    //AN OPTIONAL JUICY THING TO MAKE IT SLIDE EVERY 3 SECONDS. 
       /* setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000); adding the autoplay feature so that i can reset it when users
    click the arrows*/
    let autoPlay = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 4000);

    //reset the autoplay timer everytime user clicks
    function resetAutoplay() {
        clearInterval(autoPlay);
        autoPlay = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, 4000);
    }

})