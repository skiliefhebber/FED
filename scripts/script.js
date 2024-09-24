// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header > button");
var sluitButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

function openMenu() {  
    deNav.classList.add("toonMenu");
  }
  
function sluitMenu() {
    deNav.classList.remove("toonMenu");
  }

console.log("hallo");