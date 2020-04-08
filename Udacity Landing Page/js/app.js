// let a;
// a = 5;
// const b = 6;

// {
//     let a = 7;

// }
// console.log(a)
const anArray = [1, "food", 5, "hall", 10];
const numArray = [1, 5, 10, 16, 50, 80];
//anArray.push(50)
//console.log(anArray)
let a = 55;
let b = "55";
// console.log(a + b)
// if (a === b) {
//     console.log("similar")
// } else {
//     console.log("not similar")
// }
// let aStr = `The value of a is ${a}
// The value of b is ${b}`
// console.log(aStr)
// let strArray = anArray.filter(element => typeof element === "string")
// //console.log(strArray)
// let filtArray = numArray.filter(el => el > 15);
// //console.log(filtArray)
// let filtNumber = numArray.find(el => el > 15);
// //console.log(filtNumber)
// let filtIndex = numArray.findIndex(el => el > 15);
// //console.log(filtIndex)
// numArray.forEach((el, ind) => {
//     console.log(el * ind)
// })

// We select first every section with element name (section)
//Because section element is more than 1 (currently), we use querySelectorAll
let pageSections = document.querySelectorAll("section");
// I have nodelist in return. It is like array.
//console.log(pageSections);

// Because its classname is given, because it is only one, querySelector(".navbar")
let parentUL = document.querySelector(".navbar");
pageSections.forEach((elements, ind) => {
  //data-info attribute for each section; getAttribute method
  let listInfo = elements.getAttribute("data-info");
  //console.log(listInfo)
  //Create list item for every section
  let listIt = document.createElement("li");
  //Populate inside of list element with a tag
  //Dynamically add link to href to have the ability to jump to relevant section
  listIt.innerHTML = `<a href="#sect${ind + 1}" id="s${ind +
    1}">${listInfo}</a>`;
  //append with appendChild method to a parent
  parentUL.appendChild(listIt);
  //console.log(elements.getBoundingClientRect().top);
});
let posArray = [];
let half_window_height = parseInt(window.innerHeight / 2);

document.addEventListener("scroll", () => {
  posArray = [];
  pageSections.forEach((elements, ind) => {
    let pos = elements.getBoundingClientRect().top;
    posArray.push(pos);
  });
  //console.log(posArray);
  let myCandidate = posArray.findIndex(el => el > 0);
  let myCandidatePos = posArray.find(el => el > 0);
  console.log(myCandidatePos);
  //console.log(myCandidate + 1);
  for (let j = 0; j < pageSections.length; j++) {
    if (j === myCandidate && myCandidatePos < half_window_height) {
      document.getElementById("s" + (j + 1)).classList.add("highlighted");
      document.getElementById("sect" + (j + 1)).classList.add("active-class");
    } else {
      document.getElementById("s" + (j + 1)).classList.remove("highlighted");
      document
        .getElementById("sect" + (j + 1))
        .classList.remove("active-class");
    }
  }
});
