function myfun() {
  var x = document.getElementById("content");

  x.classList.toggle("show");
}

function myMax() {
  window.location.assign("card.html");
  pankaj();
}

const card = [
  {
    image:
      "https://images.unsplash.com/photo-1622279487170-dbccd34eda0e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "dhoope incens cone",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599447292180-45fd84092ef0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "hem incence",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1700581634051-afa0328ef3fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "mystic temple in cence",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675279010961-8a6679ff03da?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "sance incence",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533552755457-5b471cb2ab11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "pankaj",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1700581634051-afa0328ef3fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "mystic temple in cence",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675279010961-8a6679ff03da?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "sance incence",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533552755457-5b471cb2ab11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "pankaj",
    desription: " 4 in 1 long 100 pcs dhoopr for regular",
    rating: "*****",
    price: "$12.4",
  },
];

let contents = document.querySelector(".card-container");

const pankaj = () => {
  card.map((item) => {
    console.log(item);
    let x = document.createElement("div");
    x.classList.add("card");
    x.innerHTML = `
           <img src=${item.image} class="dhoops-items" onclick="checkOut()"/>
               <h3 class="cls-item">${item.title}</h3>
             
               <p class="para">${item.desription}</p>
               <h4 class="yale-str">${item.rating}</h4>
               <h4 class="magnet">${item.price}</h4>
           `;
    contents.appendChild(x);
  });
};
