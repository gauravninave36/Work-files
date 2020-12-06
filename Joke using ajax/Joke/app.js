const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const image = document.querySelector(".container img")

btn.addEventListener("click", () => {
    getData(url)
        .then((data) => displayData(data))
        .catch((err) => console.log(err));
});

const getData = () => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        console.log(xhr);
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            }
            else {
                reject({
                    status: xhr.status,
                    text: xhr.statusText,
                    state: xhr.readyState,
                });
            }
        }
        xhr.send();
    })
    return promise;
};

function displayData(data) {
    console.log(data);
    const { value: joke } = JSON.parse(data);
    content.innerHTML = joke;
    image.classList.add("shake-img");
    const random = (Math.random()) * 1000;
    setTimeout(function () { image.classList.remove("shake-img") }, random);
}