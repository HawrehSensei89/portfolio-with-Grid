// // show sidebar
// navBtn.addEventListener("click", function () {
//     sidebar.classList.add("show-sidebar");
// });

// // close sidebar
// closeBtn.addEventListener("click", function () {
//     sidebar.classList.remove("show-sidebar");
// });

// // set year
// date.innerHTML = new Date().getFullYear();



const navbar = document.querySelector("#nav");

// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});