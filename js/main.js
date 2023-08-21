const createBtn = document.getElementById("create-btn");
const grid = document.getElementById("grid");

createBtn.addEventListener("click", function () {
  generateGrid();
});

function generateGrid() {
  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = i;

    cell.addEventListener("click", function () {
      this.classList.add("clicked");
      console.log(i);
    });

    grid.append(cell);
  }
}
