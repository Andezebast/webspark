$(document).ready(function () {
  $("#date-from").datepicker({
    format: "yyyy-mm-dd",
  });
  $("#date-to").datepicker({
    format: "yyyy-mm-dd",
  });
});

const mainUl = document.querySelector(".main-ul");
const mainButtonRow = document.querySelector(".main-buttons-row");
const mainButtonGrid = document.querySelector(".main-buttons-grid");

if (window.innerWidth <= 576) {
  mainUl.classList.add("grid");
}

mainButtonRow.addEventListener("click", () => {
  mainButton(mainButtonGrid, mainButtonRow, "remove");
});
mainButtonGrid.addEventListener("click", () => {
  mainButton(mainButtonRow, mainButtonGrid, "add");
});

function mainButton(firstButton, secondButton, value) {
  firstButton.classList.remove("active");
  secondButton.classList.add("active");
  switch (value) {
    case "add":
      mainUl.classList.add("grid");
      break;
    case "remove":
      mainUl.classList.remove("grid");
      break;
  }
}
