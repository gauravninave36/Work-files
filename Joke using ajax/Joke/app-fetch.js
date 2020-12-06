const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const image = document.querySelector(".container img")

btn.addEventListener("click", () => {
    fetch(url).then((data) => (data.json())).then(repon => displayData(repon)).catch((err) => console.log(err));
});



function displayData(data) {
    console.log(data);
    const { value: joke } = data;
    content.innerHTML = joke;
    image.classList.add("shake-img");
    const random = (Math.random()) * 1000;
    setTimeout(function () { image.classList.remove("shake-img") }, random);
}