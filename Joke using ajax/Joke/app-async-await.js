const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const image = document.querySelector(".container img")

btn.addEventListener("click", async () => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        displayData(response);

    } catch (error) {
        console.log(error);
    }

});



function displayData(data) {
    console.log(data);
    const { value: joke } = data;
    content.innerHTML = joke;
    image.classList.add("shake-img");
    const random = (Math.random()) * 1000;
    setTimeout(function () { image.classList.remove("shake-img") }, random);
}