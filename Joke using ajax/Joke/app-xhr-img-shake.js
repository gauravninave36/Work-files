const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const image = document.querySelector(".container img")

btn.addEventListener("click", () => {
    getData(url);
});

const getData = () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const { value: joke } = JSON.parse(xhr.responseText);
            content.innerHTML = joke;
            image.classList.add("shake-img");
            const random = (Math.random()) * 1000;
            setTimeout(function () { image.classList.remove("shake-img") }, random);
        }
        else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
                state: xhr.readyState,
            });
        }
    }
    xhr.send();
};