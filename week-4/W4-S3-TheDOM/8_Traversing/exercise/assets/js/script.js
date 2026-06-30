var sideBarEl = document.querySelectorAll(".sidebar li");

sideBarEl.style = "color: #3300ff";


// 1. Select the h2 element
var h2Element = document.querySelector(".widget h2");

// 2. Change its text
h2Element.childNodes[0].textContent = "Reports";


// 1. Select the h2 element
var pElement = document.querySelector(".widget:nth-of-type(3) p");

pElement.textContent = "Optimise performance metrics here.";