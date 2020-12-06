const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function event(param) {
    //to get random number from 0 to 3
    // const random = Math.round((Math.random() * 3));

    const randomnumber = Math.round((Math.random() * 3));
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
    console.log(color);
});
