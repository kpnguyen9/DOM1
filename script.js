// console.log("Hi Dom");

// // console.log(document);

// let elementH1 = document.getElementById("header");
// let elementsLi = document.getElementsByClassName("list-item");
// let elementH2 = document.createElement("h2");

// elementH2.textContent = "This is an h2 tag";

// let elementP = document.getElementById("p1");

// elementP.style.color = "green";

// let containerDiv = document.getElementById("container");

// containerDiv.appendChild(elementH2);

// // console.log(elementH1, elementsLi, elementH2);

// let familyButton = document.getElementById("button");

// familyButton.addEventListener("click", () => {
//   elementH1.style.color = "red";
//   elementH1.textContent = "Hello Family";
// });

// console.dir(document);

let containerDiv = document.getElementById("container");

let element1 = document.createElement("p1");
let element2 = document.createElement("p2");
let element3 = document.createElement("p3");

let list1 = document.createElement("li");
let list2 = document.createElement("li");
let list3 = document.createElement("li");

element1.textContent = "Hello hello hello";
containerDiv.appendChild(element1);

list1.textContent = "list 1";
containerDiv.appendChild(list1);

let familyButton = document.getElementById("button");
// familyButton.classList.add("famButton");

familyButton.addEventListener("click", () => {
  element2.textContent = "Hello 2";
  containerDiv.appendChild(element2);
  // alert("hi");
});
