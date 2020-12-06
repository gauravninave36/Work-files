// set date
const date = document.getElementById("date");
const currentDate = new Date().getFullYear();
date.textContent = currentDate;

//close links 
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
});

//*********fixed navbar***********/
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    }
    else {
        navBar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
});

// *********smooth scroll******
//select links
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
        //preventdefault behavior
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculation of height
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        let currentPosition = element.offsetTop - navHeight;
        if (!fixedNav) {
            currentPosition = currentPosition - navHeight;
        };
        if (navHeight > 82) {
            currentPosition = currentPosition + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: currentPosition,
        });

    });
});
