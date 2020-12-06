function showthis() {
    console.log(this);
};
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function () {
    showthis();
})
const john = {
    firstName: "bob",
    showthis
}
john.showthis();