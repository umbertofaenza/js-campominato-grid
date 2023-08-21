const createBtn = document.getElementById("create-btn");
const emptyBtn = document.getElementById("empty-btn");
const grid = document.getElementById("grid");
const difficultySelect = document.getElementById("difficulty-select");

// function to generate a cell
function generateCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("click", function () {
    this.classList.add("clicked");
    console.log(this.innerText);
  });

  return cell;
}

// function to generate a grid with the number of cells we want
function generateGrid(totalCells) {
  for (let i = 1; i <= totalCells; i++) {
    const generatedCell = generateCell();
    generatedCell.innerText = i;
    grid.append(generatedCell);
  }
}

// button to generate grid
createBtn.addEventListener("click", function () {
  generateGrid(100);
});

// button to empty grid
emptyBtn.addEventListener("click", function () {
  grid.innerHTML = "";
});
