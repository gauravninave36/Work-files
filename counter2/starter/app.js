function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(`please check "${selection}" selector,no such element exists `);
};
function Counter(element, value) {
    console.log(element, value);
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
    this.increase = function () {
        this.value++;
        this.valueDOM.textContent = this.value;
    };
    this.decrease = function () {
        this.value--;
        this.valueDOM.textContent = this.value;
    };
    this.rese = function () {

        this.value = 0;
        this.valueDOM.textContent = this.value;
    };
    //cause this.increaseBtn can only give of of button only on the scope after for using this.increase,this.decrease,this.rese we need a scope of the this full counter otherwise value wont change in the textcontent of this.rese,this.increse etc 
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.rese = this.rese.bind(this);
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.rese);

}

const firstCounter = new Counter(getElement(".first-counter"), 300);
const secondCounter = new Counter(getElement(".second-counter"), 200);
console.log(firstCounter);