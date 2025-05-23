document.addEventListener("DOMContentLoaded", function () {
    //declaring all the variables yeah!
    const track = document.querySelector(".carousel-track");
    const items = Array.from(track.children);
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");
    //starting at 0 for the items in the caro
    let currentIndex = 0;
    //variable and function that will make the caro move 
    
    function updateCarousel() {
        const width = track.getBoundingClientRect().width;
        track.style.transform = `translateX(-${width * currentIndex}px)`;
    }
    updateCarousel();
    console.log('prev', prevButton);
    console.log('next', nextButton);

    //Give the buttons functionalities
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    })

    //AN OPTIONAL JUICY THING TO MAKE IT SLIDE EVERY 3 SECONDS. Need to later add something that ensures it also considers the user's clicks then starts counting
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 3000);

})