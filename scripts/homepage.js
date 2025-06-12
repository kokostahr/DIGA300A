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
       /*adding the autoplay feature so that i can reset it when users
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

    /**Adding swipe support for touch screen devices */
    let startX = 0;
    track.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (diff > 50) {
            nextButton.click();
        } else if (diff < -50) {
            prevButton.click();
        }
    });

    //WEATHER API
    async function loadCustomWeather() {
        const apiKey = '44a0a0f1e9d4495199a90542251206'; // Replace this with your own key
        const city = 'Johannesburg';

        try {
            const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
            );
            const data = await res.json();

            document.getElementById("weather-temp").textContent = `${data.current.temp_c}°C`;
            document.getElementById("weather-desc").textContent = data.current.condition.text;
            document.getElementById("weather-icon").src = `https:${data.current.condition.icon}`;
        } catch (error) {
            console.error("Failed to load weather data :CC", error);
        }
    }

    //MOONPHASE API
    async function loadMoonPhase() {
        const apiKey = 'YSZ38T6AR894ZGUCLNU4Y2HHH';
        const city = 'Johannesburg';

        try {
            const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&include=days`);
            const data = await res.json();

            const today = data.days[0];
            const moonPhase = today.moonphase;
            const moonrise = today.moonrise;
            const moonset = today.moonset;


            const moonPhaseDesc = interpretMoonPhase(moonPhase);
            const moonEmoji = getMoonEmoji(moonPhase);
            document.getElementById('moon-icon').textContent = moonEmoji;
            document.getElementById('moonphase-data').textContent = `🌕 ${moonPhaseDesc}`;
            document.getElementById('moonrise-time').textContent = `🌅 Moonrise: ${moonrise || "N/A"} `; //NA is because, as the site states "Notice that in some cases these may be missing because they do not apply" (https://www.visualcrossing.com/resources/documentation/weather-api/how-to-include-sunrise-sunset-and-moon-phase-data-into-your-api-requests/)
            document.getElementById('moonset-time').textContent = `🌇 Moonset: ${moonset || "N/A"} `;
        } catch (err) {
            console.error('Moon phase fetch failed T^T', err);
            document.getElementById('moonphase-data').textContent = 'Could not load moon phase 😭';
            document.getElementById('moonrise-time').textContent = '';
            document.getElementById('moonset-time').textContent = '';
        }
    }

    function interpretMoonPhase(phase) {
        if (phase === 0 || phase === 1) return "New Moon";
        if (phase < 0.25) return "Waxing Crescent";
        if (phase === 0.25) return "First Quarter";
        if (phase < 0.5) return "Waxing Gibbous";
        if (phase === 0.5) return "Full Moon";
        if (phase < 0.75) return "Waning Gibbous";
        if (phase === 0.75) return "Last Quarter";
        if (phase < 1) return "Waning Crescent";
        return "Unknown Phase 🪐";
    }
    //This is for the animations of the moon phases ;^;
    function getMoonEmoji(phase) {
        if (phase === 0 || phase === 1) return "🌑"; // twilight new moon
        else if (phase > 0 && phase < 0.25) return "🌒"; // waxing crescent
        else if (phase === 0.25) return "🌓"; // first quarter
        else if (phase > 0.25 && phase < 0.5) return "🌔"; // waxing gibbous
        else if (phase === 0.5) return "🌕"; // full moon
        else if (phase > 0.5 && phase < 0.75) return "🌖"; // waneing gibbouss
        else if (phase === 0.75) return "🌗"; // last quarter
        else return "🌘"; // waning crescent
    }

    //NASA astronomy picture of the day (apod) 
    async function loadApod() {
        const apiKey = 'wjLC8XhYO8qzgooCFbcI7qjpc8U8QtBcAsjKZXxy';

        try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        const data = await res.json();

        //display da descrip.
        document.getElementById('apod-description').textContent = data.explanation;

        // display the pic
        const img = document.getElementById("apod-image");
        img.src = data.hdurl || data.url;
        img.alt = data.title || "NASA's Astronomy Picture of the Day";

        } catch (err) {
            console.error('Could not fetch the stars 😭', err);
            document.getElementById('apod-description').textContent = 'Could not load APOD 🌌';
        }
    }

    //then run errything on load
    window.onload = () => {
        loadCustomWeather(); 
        loadMoonPhase();  
        loadApod();   
    }

})