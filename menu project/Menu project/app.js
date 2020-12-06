const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const buttonContainer = document.querySelector(".btn-container")
const sectionCenter = document.querySelector('.section-center');


window.addEventListener("DOMContentLoaded", function () {
  menuPage(menu);

});


//dynamic buttons 


const buttonDynamic = menu.reduce(function (accumulatedValue, currentvalue) {
  if (!accumulatedValue.includes(currentvalue.category)) {
    accumulatedValue.push(currentvalue.category);
  }
  return accumulatedValue;
}, ["all"]);

function getbuttons() {
  let btn = buttonDynamic.map(function (e) {
    const buttons = `<button class="filter-btn" type="button" data-id ="${e}">${e}</button>`;
    return buttons;
  })
  let button = btn.join("");
  return buttonContainer.innerHTML = button;
}

getbuttons();


const filterButton = document.querySelectorAll(".filter-btn");


filterButton.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    let filtercategory = menu.filter(function (menuItem) {
      if (category === menuItem.category) {

        return menuItem;
      }
    });
    if (category !== "all") {
      menuPage(filtercategory);
    }
    else { menuPage(menu); }
  });
})


function menuPage(menuitems) {
  let velo = [];
  menuitems.forEach(function (item) {
    let itemG = `<article class="menu-item">
               <img src="${item.img}" class="photo" alt="menu-item" srcset="">
               <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </article>`
    velo.push(itemG);
  });
  let game = velo.join("");
  return sectionCenter.innerHTML = game;
};




