// add java to html document
<script defer src="fileName"></script>

// looks for the id view2
const view = document.querySelector("#view2")

const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
  alert("do something");
}

// when click the h2 element is clicked on the page, do something executes
h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false); // removes it

// anonymous function in method
h2.addEventListener("click", (event) => {
  console.log(event.target); // target is the h2 element
  event.target.textContent = "Clicked"; // changes the text of h2
});

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyStae: complete");
    initApp();
  }
});


// function to initialize the webpage (changes some attributes)

const initApp = () => {
  const view = document.querySelector("#view2")
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    event.stopPropagation(); // makes it so these other elements contained in view dont activate on click event
    view.style.backgroundColor = "purple";
  }, true); // propogates from outside to in when true; in to out when false

  div.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
  }, true);

  h2.addEventListener("click", (event) => {
    event.target.textContent = "Clicked";
  }, true);

  view.addEventListener("click", (event) => {
    view.classList.add("purple");
    view.classList.remove("darkblue");

    // or
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  }, true);


  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  })
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  })
};
