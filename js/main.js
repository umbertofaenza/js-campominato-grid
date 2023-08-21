const createBtn = document.getElementById("create-btn");
const grid = document.getElementById("grid");

createBtn.addEventListener("click", function () {
  generateGrid();
});

function generateGrid() {
  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    grid.append(cell);
  }
}
