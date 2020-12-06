// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
const currentDate = new Date().getFullYear();
date.textContent = currentDate;


// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
let linksContainer = document.querySelector(".links-container");
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
//************ scroll fix-navbar*********//

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const navbarHeight = navbar.getBoundingClientRect().height;
    const currentpageYoffset = window.pageYOffset;
    if (currentpageYoffset > navbarHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    };
    if (currentpageYoffset > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    };
});


//************Smooth Scroll*************//
//select links
const scrolLinks = document.querySelectorAll(".scroll-link");

scrolLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        //navigate to a specific spot 
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - navbarHeight;
        //calculating heights
        const heightScrollLink = element.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav");
        //fix=360 and notfix=443 ulta hai
        if (!fixedNav) {
            position = position - navbarHeight;
        };
        // if (navbarHeight > 83) {
        //     position = position - containerHeight;
        // };
        // linksContainer.style.height = 0;
        window.scrollTo({
            left: 0,
            top: position
        });

    })

});