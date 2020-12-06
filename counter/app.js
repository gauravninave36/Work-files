// let the initial count to be zero
let count = 0;

//select values and buttons 
const values = document.querySelector("#value");
const button = document.querySelectorAll(".btn");
// button.forEach(e => {
//     e.addEventListener("click",function(e){

//     })
// });
for (i = 0; i <= 2; i++) {
    const e = button[i];
    e.addEventListener("click", function (e) {
        let target = e.currentTarget;


        if (target.classList.contains("decrease")) {
            count--;

        }
        else if (target.classList.contains("increase")) {
            count++;

        }
        else {
            count = 0;
        };

        values.textContent = count;
    })
}
