const openMenuBtn = document.querySelector(".open--menu");
const closeMenuBtn = document.querySelector(".close--menu");
const menu = document.querySelector(".mobile--nav----with--btn");
const featuresDropdown = document.querySelector(".one");
const companyDropdown = document.querySelector(".two");
const featuresDropdownBtn = document.querySelector(".features--dropdown--btn");
const companyDropdownBtn = document.querySelector(".company--dropdown--btn");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

openMenuBtn.addEventListener("click", showMenu);
closeMenuBtn.addEventListener("click", unshowMenu);
featuresDropdownBtn.addEventListener("click", showDropdown1);
companyDropdownBtn.addEventListener("click", showDropdown);

function showMenu() {
  menu.classList.add("show");
  if (menu.classList.contains("show")) {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  }
}

function unshowMenu() {
  menu.classList.remove("show");
  if (!menu.classList.contains("show")) {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
}

function showDropdown1() {
  featuresDropdown.classList.toggle("show");
  if (featuresDropdown.classList.contains("show")) {
    arrow2.style.transform = "rotate(180deg)";
  } else {
    arrow2.style.transform = "rotate(0deg)";
  }
}


function showDropdown() {
  companyDropdown.classList.toggle("show");
  if (companyDropdown.classList.contains("show")) {
    arrow1.style.transform = "rotate(180deg)";
  } else {
    arrow1.style.transform = "rotate(0deg)";
  }
}
// companyDropdown.classList.toggle("show");
// if (companyDropdown.classList.contains("show")) {
//   arrow.style.transform = "rotate(180deg)";
// } else {
//   arrow.style.transform = "rotate(0deg)";
// }
