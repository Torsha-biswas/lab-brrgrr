//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen every time the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  patty.style.display = state.Patty ? "inherit" : "none";
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  cheese.style.display = state.Cheese ? "inherit" : "none";
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  tomatoes.style.display = state.Tomatoes ? "inherit" : "none";
}

function renderOnions() {
  let onions = document.querySelector("#onion");
  onions.style.display = state.Onions ? "inherit" : "none";
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  lettuce.style.display = state.Lettuce ? "inherit" : "none";
}

function renderButtons() {
  for (let ingredient in state) {
    let button = document.querySelector(`.btn-${ingredient.toLowerCase()}`);
    button.classList.toggle('active', state[ingredient]);
  }
}

function renderIngredientsBoard() {
  let board = document.querySelector(".items-board");
  board.innerHTML = "";
  for (let ingredient in state) {
    if (state[ingredient]) {
      let listItem = document.createElement("li");
      listItem.textContent = ingredient;
      board.appendChild(listItem);
    }
  }
}

function renderPrice() {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").textContent = `INR ${totalPrice}`;
}

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", function() {
    let ingredient = button.textContent.trim();
    state[ingredient] = !state[ingredient];
    renderAll();
  });
});

// Initial render
renderAll();
