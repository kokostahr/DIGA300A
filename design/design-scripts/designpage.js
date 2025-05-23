//literally copying the bottom navigation from the blog pages
//OPENING WITH 'WAIT FOR PAGE TO LOAD THEN IMPLEMENT'
document.addEventListener("DOMContentLoaded", function () {
    //Want to start by putting my bottom navigation into this so that it doesn't havent to be hard coded "a static website"
    //This is gonna be hard T^T
    /**In html, i'll put a reference to this? containter? omg idk how this will work. */
    const botNavContainer = document.querySelector(".botNaviPlaceholder");

    //Gonna put all the relevant blog posts in an array. Will add more, as needed
    const blogPosts = [
        {title: "Wiringframing process continued...", url:"design-wireframes.html"},
        {title: "UX/UI Considerations", url:"design-uxui-considerations.html"},
        {title: "Style Guides", url:"design-style-guide.html"},
        {title: "Star's Reflections Part 1", url:"design-refections.html"},
        {title: "Star's Reflections Part 2", url:"design-reflections-2.html"},
        {title: "Star's Reflections Part 3", url:"design-reflections-3.html"},
    ];
    //now i need to somehow detect which page is open T^T so the right thing shows
    const currentOpenPage = window.location.pathname.split("/").pop();
    //then I will need to also check which array value is open.
    const currentIndex = blogPosts.findIndex(post => post.url === currentOpenPage);

    //if there's a page that isnt in the array, then nothing should happen. will find a way to make it say 'unavaliabel'
    if (currentIndex === -1) {
        return;
    }

    //NOW NEED A WAY TO ENSURE AND LINK IT WITH THE CSS, BECAUSE I DONT WANNA LOSE MY STYLING
    let botNavHTML = `<ul class ="bot-navi">`; //Using a backtick `..`

    //Displaying the previous blogpost link
    if (currentIndex > 0) {
        const prevPost = blogPosts[currentIndex - 1];
        botNavHTML += `<li>Previous Blog: <a href="${prevPost.url}">${prevPost.title}</a></li>`;
        /**The dolluh sign makes it easier to reference the relevant post title and post url for the navigation appearance */
    }

    //displaying the 'back to blog homepage' link
    botNavHTML += `<li><a href ="../design-homepage.html">Back to Design Home</a></li>`;

    //displaying the next blog post
    if (currentIndex < blogPosts.length - 1) {
        const next = blogPosts[currentIndex + 1];
        botNavHTML += `<li>Next Blog: <a href ="${next.url}">${next.title}</a></li>`;
    }

    //closing the bot navi ul class
    botNavHTML += `</ul>`;
    //finishing it off by calling errthing into the div container. 
    botNavContainer.innerHTML = botNavHTML;
})