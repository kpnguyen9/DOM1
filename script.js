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
let containerLink = document.getElementById("linkDiv");

let element1 = document.createElement("p1");
let a = document.createElement("a");
let element3 = document.createElement("p3");
let h1 = document.getElementById("header");

let list1 = document.createElement("li");
let list2 = document.createElement("li");
let list3 = document.createElement("li");

element1.textContent = "Hello hello hello";
containerDiv.appendChild(element1);

let linkText = document.createTextNode("Click here for more information");
a.appendChild(linkText);
a.className = "title text";
a.href = "google.com";
containerLink.appendChild(a);

list1.textContent = "list 1";
list2.textContent = "second list";
list3.textContent = "3rd list object";
containerDiv.appendChild(list1);
containerDiv.appendChild(list2);
containerDiv.appendChild(list3);

let listArr = document.getElementsByTagName("li");
// console.log(listArr);

let familyButton = document.getElementById("button");
// familyButton.classList.add("famButton");

familyButton.addEventListener("click", () => {
  element3.textContent = "Hello 3";
  containerDiv.appendChild(element3);

  for (let i = 0; i < listArr.length; i++) {
    listArr[i].textContent = "for loop text content";
    listArr[i].style.color = "cyan";
  }

  h1.textContent = "Hello Family";

  familyButton.style.backgroundColor = "blue";
});
