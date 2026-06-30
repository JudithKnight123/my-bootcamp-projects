// TODO: Add 2 new items to the sidebar called "Register" and "Help".
var mainContentEl = document.querySelector(".main-content");



// create a new div element
var newDivEl = document.createElement("div");
newDivEl.className = "widget";


var someHTML = `
  <div class="widget">
    <h2>Another Widget Title</h2>
    <p>This is the text of another widget</p>
  </div>
`;

mainContentEl.appendChild(newDivEl);
newDivEl.outerHTML = someHTML


// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?
