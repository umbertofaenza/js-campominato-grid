const createBtn = document.getElementById("create-btn");
const grid = document.getElementById("grid");

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
