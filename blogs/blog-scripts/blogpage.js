//OPENING WITH 'WAIT FOR PAGE TO LOAD THEN IMPLEMENT'
document.addEventListener("DOMContentLoaded", function () {
    //Want to start by putting my bottom navigation into this so that it doesn't havent to be hard coded "a static website"
    //This is gonna be hard T^T
    /**In html, i'll put a reference to this? containter? omg idk how this will work. */
    const botNavContainer = document.querySelector(".botNaviPlaceholder");

    //Gonna put all the relevant blog posts in an array. Will add more, as needed
    const blogPosts = [
        {title: "Week 1", url:"week-1-blog-post.html"},
        {title: "Week 2", url:"week-2-blog-post.html"},
        {title: "Week 3", url:"week-3-blog-post.html"},
        {title: "Week 4", url:"week-4-blog-post.html"},
        {title: "Week 5", url:"week-5-blog-post.html"},
        {title: "Week 6", url:"week-6-blog-post.html"},
        {title: "Week 7", url:"week-7-blog-post.html"},
        {title: "Week 9", url:"week-9-blog-post.html"},
        {title: "Week 10", url:"week-10-blog-post.html"},
        {title: "Week 11", url:"week-11-blog-post.html"},
        {title: "Week 12", url:"week-12-blog-post.html"},
        {title: "Week 13", url:"week-13-blog-post.html"},
        {title: "Week 14", url:"week-14-blog-post.html"},
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
    botNavHTML += `<li><a href ="../blog-home.html">Back to Blogz</a></li>`;

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