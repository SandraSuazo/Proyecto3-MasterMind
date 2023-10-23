let rowColors = [];
let selectedRow = 0;
let selectedSquare = 0;
let selectedCircle = 0;

// CREACIÓN DE LA TABLA
const createBoard = () => {
  const gameBoard = document.getElementById("game-board");
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add("row");
    for (let z = 0; z < 4; z++) {
      const square = document.createElement("div");
      square.id = `squareColor-${i}-${z}`;
      square.classList.add("check-color");
      row.appendChild(square);
    }
    for (let y = 0; y < 4; y++) {
      const circle = document.createElement("div");
      circle.id = `circleColor-${i}-${y}`;
      circle.classList.add("check-circle");
      row.appendChild(circle);
    }
    gameBoard.appendChild(row);
  }
};
createBoard();

// RELLENADO DE CADA FILA
const addColor = (color) => {
  rowColors.push(color);
  const square = document.getElementById(
    `squareColor-${selectedRow}-${selectedSquare}`
  );
  square.style.backgroundColor = color;
  selectedSquare += 1;
  checkColors();
};

// CORRECCIÓN DE COLORES
const checkColors = () => {
  if (selectedSquare === 4) {
    for (let i = 0; i < 4; i++) {
      const circle = document.getElementById(`circleColor-${selectedRow}-${i}`);
      if (shuffledColors[i] === rowColors[i]) {
        circle.style.backgroundColor = "#FFFFFF";
      } else if (shuffledColors.includes(rowColors[i])) {
        circle.style.backgroundColor = "#00ffff";
      } else {
        circle.style.backgroundColor = "#fb44ff";
      }
    }
    selectedSquare = 0;
    selectedRow += 1;
    rowColors = [];
  }
};
