import get from "./utils/getElement.js";
import getuser from "./utils/getdata.js";
const url = "https://randomuser.me/api/";
const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);
// let btnss = Array.from(btns);
// console.log(btnss);

const display = (person) => {
    img.src = person.image;
    title.textContent = `My name is`;
    value.textContent = person.name;
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    btns[0].classList.add("active");
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const label = btn.dataset.label;
            title.textContent = `my ${label} is`
            value.textContent = person[label];
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
        })
    })
}


const showUser = async () => {
    //get user form api
    const person = await getuser();
    console.log(person);
    //display user
    display(person)
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);