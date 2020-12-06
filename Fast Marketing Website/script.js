// $(document).ready(function () {
//     $("#toggle-btn").click(function () {
//         $(".nav-links").slideToggle(1000);
//     })
// })
// $(window).scroll(function () {
//     let scroll = $(window).scrollTop();
//     if (scroll >= 70) {
//         $("#nav").addClass("new-nav");
//     } else {
//         $("#nav").removeClass("new-nav");
//     }
// })
// $("nav a").click(function (link) {
//     link.preventDefault();
//     let target = $(this).attr("href");
//     $("html,body").animate({
//         scrollTop: $(target).offset().top
//     })
// })

window.addEventListener("scroll", function () {
    let nav = document.querySelector("#nav");
    let scroll = window.pageYOffset;
    let navBarHeight = nav.getBoundingClientRect().height;
    if (scroll > navBarHeight) {
        nav.classList.add("new-nav");
    }
    else {
        nav.classList.remove("new-nav");
    }
})

const navBtn = document.querySelectorAll(".nav-links a");

navBtn.forEach(function (selectedBtn) {
    selectedBtn.addEventListener("click", function (selected) {
        //prevent default behavior
        selected.preventDefault();
        const selectedNavButton = selected.currentTarget;

        //navigate to the specific spot 
        const navBar = document.querySelector("#nav");
        let navBarHeight = navBar.getBoundingClientRect().height;
        let navlogo = document.querySelector(".nav-logo").getBoundingClientRect().height;

        const seletedNavButtonhref = selectedNavButton.getAttribute("href");
        const section = seletedNavButtonhref.slice(1);
        const navigatoSectionheight = document.getElementById(section).offsetTop;
        //console.log(navigatoSectionheight)
        let realHeight = navigatoSectionheight - navBarHeight;
        let navfixed = navBar.classList.contains("new-nav");
        console.log(navfixed);
        if (navBarHeight >= navlogo) {
            realHeight = realHeight + navBarHeight - navlogo;

        };

        window.scrollTo({
            left: 0, top: realHeight,
        });
        const navlinks = document.querySelector(".nav-links");
        const navlinksHeight = navlinks.getBoundingClientRect().height;
        navlinks.style.height = 0;
    })
});


const button = document.querySelector("#toggle-btn");
button.addEventListener("click", function () {
    const navlinks = document.querySelector(".nav-links");
    const navlinksHeight = navlinks.getBoundingClientRect().height;

    if (navlinksHeight === 0) {
        navlinks.style.height = "330px";
        navlinks.style.display = "block";
        // navlinks.style.overflow = "hidden";
    }
    else {
        navlinks.style.height = 0;

    }
})

