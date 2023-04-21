const gameTiles = document.querySelectorAll("[data-cell]");
const board = document.querySelector("board");

const circle = "circle";
const cross = "x";
let isCircle;

function startGame() {
  // isCircle = false;
  gameTiles.forEach((tile) => {
    tile.addEventListener("click", userClick, { once: true });
  });
}

function userClick(e) {
  let clickedTile = e.target;
  const currentClass = isCircle ? circle : cross;

  clickedTile.classList.add(currentClass);
  isCircle = !isCircle;
  console.log(clickedTile);
}
startGame();
