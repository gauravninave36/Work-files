const navLink = document.querySelector("#nav ul");
const toggle = document.querySelectorAll(".fas");



function toggleBar() {
    toggle.forEach(function (item, index) {
        item.addEventListener("click", function (currentItem) {
            const selected = currentItem.currentTarget;
            if (selected === toggle[0]) {
                selected.classList.add("toggle");
                toggle[1].classList.remove("toggle");
                navLink.classList.add("show");
            }
            else {
                selected.classList.add("toggle");
                toggle[0].classList.remove("toggle");
                navLink.classList.remove("show");
            }
        })
    })

}
toggleBar();


