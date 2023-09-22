const taskInput = document.getElementById("input");
const buttonSubmit = document.getElementById("button-add");
let listContainer = document.getElementById("list-container");

showData();

buttonSubmit.addEventListener("click", function () {
  if (taskInput.value === "") {
    alert("input your task!!");
  } else {
    let item = document.createElement("li");
    item.textContent = taskInput.value.trim();
    listContainer.appendChild(item);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    item.appendChild(span);

    console.log(item);
  }
  taskInput.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (click) {
    if (click.target.tagName === "LI") {
      click.target.classList.toggle("checked");
      saveData();
    } else if (click.target.tagName === "SPAN") {
      click.target.parentElement.remove();
      saveData();
    }
    console.log(listContainer);
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
/* 
buat supaya tiap task dapat di klik dan saat di click akan mengubah background img 

*/

let dropdownButton = document.getElementById("btn-drop");
let dropdownMenu = document.querySelector(".dropdown-item"); // Menggunakan querySelector untuk memilih elemen pertama dengan class 'dropdown-item'

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("open");
  console.log("berhasil");
});

const collumn2 = document.querySelector(".collumn2");
function removeClass() {
  if (window.innerWidth <= 409) {
    collumn2.classList.remove('collumn-2')
  } else {
    collumn2.classList.add("collumn-2");
  }
}

window.addEventListener("load", removeClass);
window.addEventListener("resize", removeClass);
