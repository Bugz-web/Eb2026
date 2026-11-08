// Add custom JavaScript here

function userScroll() {
    const navBar = document.querySelector(".navbar");

    window.addEventListener("scroll", ()=>{
        if (window.scrollY > 50) {
            navBar.classList.add("bg-dark");
            navBar.classList.add("bg-opacity-75");
        }
        else {
            navBar.classList.remove("bg-dark");
            navBar.classList.remove("bg-opacity-75");
        }
    });
}

document.addEventListener("DOMContentLoaded", userScroll());