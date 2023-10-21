// Document object model

// selects ID "view" in the html file
const view1 = document.getElementById("view1");
const view2 = document.querySelector("#view2");

view1.style.display = "none";
view2.style.display = "flex";

// selects class "view" in the html file
const views= document.getElementsByClassName("view");
const sameViews = document.querySelectorAll(".view");

// selects all the divs in view 1 (selects by tagname)
const divs = view1.querySelector("div");
const sameDivs = view1.getElementsByTagName("div");

// list of all even divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

// changing the styles of the even divs
for (let i=0; i<evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "blue";
  evenDivs[i].style.width = "200px";
}

// changes the text of navText to hello world
const navText = document.querySelector("nav h1");
navText.textContent = "hello world";
const navbar = document.querySelector("nav");

// inserts html code into the html file
navbar.innerHTML = `<h1>Hello</h1> <p>This is aligned</p>`;
navbar.style.justifyContent = "space-between";

// many ways to navigate the dom
console.log(evenDivs[0]);
console.log(evenDivs[0]. parentElement.children);

// deleting elements from dom
while (view2.lastChild) {
  view2.lastChild.remove();
}

// function that makes a div
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.background = "black";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";
  newDiv.style.justifyContent = "center";
  parent.append(newDiv);
};
createDivs(view2, 10);