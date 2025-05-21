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
    const closeBtn = document.getElementById("close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    //then we need a variable that will track which item is open.
    let currentIndex = 0;

    /**This function, well, it will open the lightbox */
    function openLightbox(src, caption) {
        lightbox.style.display = "flex";
        lightboxVid.src = src;
        captionText.textContent = caption;
    }

    /**This function will, obviously close the lightbox */
    function closeLightbox() {
        lightbox.style.display = "none";
        //stop the video from playing...
        lightboxVid.pause();
        //reset the video source
        lightboxVid.src = "";
    }

    //doing something that will open the lightbox for each gellery item...and set a click event for each figure
    galleryItems.forEach((figure, index) => {
    const vid = figure.querySelector("video") || figure.querySelector("iframe");
    if (vid) {
        vid.style.cursor = "pointer";
        vid.addEventListener("click", () => {
                currentIndex = index;

                const videoSrc = vid.getAttribute("src") || vid.src;
                const caption = figure.querySelector(".summary")?.textContent || "";

                openLightbox(videoSrc, caption);
                console.log("Clicked", videoSrc);
            });
        }
    });
    console.log("Clicked", vid.src || vid.getAttribute("src"));
    //then calling the closebuttonnn
    closeBtn.addEventListener("click", () => {
    closeLightbox();
    });
    //Can I add an escape 'esc' to close the lightbox too
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });

    //THEN ADD THE PREVIOUS AND NEXT FUNCTIONALITY 
    
});