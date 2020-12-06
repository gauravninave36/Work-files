const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = "#";
    let hexcut = hexColor.split("");
    for (let i = 1; i < 7; i++) {
        hexcut[i] = hexIntergerchoose();
    };
    // console.log(hexcut);
    hexColor = hexcut.join("");
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});



function hexIntergerchoose() {
    const randomnumber = Math.round((Math.random() * 15))
    console.log(randomnumber);
    return hex[randomnumber];
}
