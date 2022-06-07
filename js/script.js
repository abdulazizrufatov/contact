const elform = document.querySelector(".form");
const elformInput = document.querySelector(".form-input");
const elinput = document.querySelector(".input");
const elNumberInput = document.querySelector(".number-input");
const elList = document.querySelector(".list");

const arr = [];

elform.addEventListener("submit", (evl) => {
  evl.preventDefault();

  const elformInputValue = elformInput.value;
  const elinputValue = elinput.value;
  const elNumberInputValue = elNumberInput.value;

  const todo = {
    firstNAme: elformInputValue,
    name: elinputValue,
    num: elNumberInputValue,
  };

  elformInput.value = null;
  elinput.value = null;
  elNumberInput.value = null;

  arr.push(todo);
  elList.innerHTML = null;

  for (let todo of arr) {
    const newLi = document.createElement("li");
    elList.appendChild(newLi);
    const newh3 = document.createElement("h3");
    newh3.textContent = "Lorem ipsum dolo";

    const firstP = document.createElement("p");
    const newP = document.createElement("p");
    const tellP = document.createElement("p");
    newLi.appendChild(newh3);
    newLi.appendChild(firstP);
    newLi.appendChild(newP);
    newLi.appendChild(tellP);

    firstP.textContent = `${todo.firstNAme}`;
    newP.textContent = `${todo.name}`;
    tellP.textContent = `${todo.num}`;
  }
});
