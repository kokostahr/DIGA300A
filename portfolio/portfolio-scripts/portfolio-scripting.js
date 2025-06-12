//Making a basic lightbox thingy.
//ofcourse starting with the dom
document.addEventListener("DOMContentLoaded", function (){
    //BASIC LIGHT BAOX USING THIS TUTORIAL :https://youtu.be/zGUESwggf-M?si=H86frSwsgxS7Sdla 
    //defining all the variables we will need, each figure item, then the stuff the lightbox will use
    /*SO far, it seems like this is not working out, due to theway I am calling the individual gallery items. I need
    to find a way to properly call all the gallery items so that the lightbox can display properly.*/
    const galleryItems = document.querySelectorAll(".portDisplay figure");
    const lightbox = document.getElementById("lightboxs");
    /*const lightboxVid = document.getElementById("lightbox-video");*/
    const lightboxVid = lightbox.querySelector("video"); //getting the video inside the lightbox
    const captionText = document.getElementById("caption");
   
    //then we need a variable that will track which item is open.
    let currentIndex = 0;

    /**This function, well, it will open the lightbox */
    function openLightbox(src, caption) {
        lightbox.style.display = "flex";

        //adding a juicy opening anim. waiting for the lightbox to display before animaiton
        requestAnimationFrame(() => {
            lightbox.style.opacity = "1";
            lightbox.style.transform = "scale(1)";
        });

        lightboxVid.src = src;
        captionText.textContent = caption;
    }

    /**This function will, obviously close the lightbox */
    function closeLightbox() {
        //adding fade out anim.
        lightbox.style.opacity = "0";
        lightbox.style.transform = "scale(0.95)";

        setTimeout(() => {
            lightbox.style.display = "none";
            if (lightboxVid.tagName.toLowerCase() === "video") {
                lightboxVid.pause();
                lightboxVid.src = "";
            }
        }, 400);
    }

    //doing something that will open the lightbox for each gellery item...and set a click event for each figure
    galleryItems.forEach((figure, index) => {
    /*const vid = figure.querySelector("video") || figure.querySelector("iframe");
    if (vid) {
        vid.style.cursor = "pointer";
        vid.addEventListener("click", () => {
                currentIndex = index;

                const videoSrc = vid.getAttribute("src") || vid.src;
                const caption = figure.querySelector(".summary")?.textContent || "";

                openLightbox(videoSrc, caption);
                console.log("Clicked", videoSrc);
            });
        }*/

    //retrying but this time, making it so that the user can click anywhere on the figure, not just the video
        figure.style.cursor = "pointer";
        figure.addEventListener("click", () => {
            currentIndex = index;
            const vid = figure.querySelector("video") /*|| figure.querySelector("iframe")*/;
            const src = vid ? (vid.getAttribute("src") || vid.src) : "";
            const caption = figure.querySelector(".summary")?.textContent || "";
            openLightbox(src, caption);
        });
    });

    const closeBtn = document.getElementById("close");
    //WHY WONT THESE BUTTONS WORK!
    console.log(closeBtn); // should log the element, or null if not found
    //then calling the closebuttonnn
    closeBtn.addEventListener("click", (e) => {
        console.log("Close clicked");
        closeLightbox();
    });
    //Can I add an escape 'esc' to close the lightbox too
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
        //added keyboard navigation. does it work? lol.
        if (e.key === "ArrowRight") {
            showItem(currentIndex + 1);
        } else if (e.key === "ArrowLeft") {
                showItem(currentIndex - 1);
        }
    });

    
    //THEN ADD THE PREVIOUS, CLOSE AND NEXT FUNCTIONALITY. Adding a function that will detect which item in the lightbox loop we are in
    //it doesnt work. sigh. show the item at the index 
    function showItem(index) {
        const totalItems = galleryItems.length;
        //then wrap it around if te index goes way too far
        if (index < 0) {
            index = totalItems -1;
        } else if (index >= totalItems) {
            index = 0;
        }

        currentIndex = index;
        const figure = galleryItems[currentIndex];
        const vid = figure.querySelector("video") || figure.querySelector("iframe");

        if(vid) {
            const vidSrc = vid.getAttribute("src") || vid.src;
            const caption = figure.querySelector(".summary")?.textContent || "";

            openLightbox(vidSrc, caption);
        }
    } 
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    //previous button functionality 
    prevBtn.addEventListener("click", () => {
        showItem(currentIndex - 1);
    });
    //next button functionality 
    nextBtn.addEventListener("click", () => {
        showItem(currentIndex + 1);
    });

    //adding a filter to the port
    const filterButtons = document.querySelectorAll(".filter-btn");
    const filterItems = document.querySelectorAll(".filter-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            filterItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});