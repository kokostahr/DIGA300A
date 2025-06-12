document.addEventListener("DOMContentLoaded", function () {
    //pseudo commision form because I don't actually have the mental capacity to take commmissons
    const form = document.getElementById("commissionForm");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    // take the values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const type = document.getElementById("type").value;
    const desc = document.getElementById("desc").value.trim();
    const budget = document.getElementById("budget").value;

    // validation checks to make sure that the fields arent empty before the aliens try to submit. WHY WON'T YOU WORK OMG
    if (!name || !email || !type || !desc || budget <= 0) {
      alert("( ｡ •̀ ᴖ •́ ｡) Please fill in all fields with valid galatic infos.");
      return;
    }

    // acting like it's sending the request confirmation to my inbox, xD 
    confirmation.classList.remove("hidden");
    form.reset();

    // then hide the confirmation after 5secondssss
    setTimeout(() => {
      confirmation.classList.add("hidden");
    }, 5000);
  });
});