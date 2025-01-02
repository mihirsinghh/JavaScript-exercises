const container = document.createElement("div");
container.classList.add("container-content");
document.body.appendChild(container);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.classList.add("redText-content");
redText.setAttribute("style", "color: red");
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.cssText = "color: blue";
container.appendChild(blueText);

const container2 = document.createElement("div");
container2.style.cssText = "border: solid black; background-color: pink;";
document.body.appendChild(container2);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!"
container2.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!"
container2.appendChild(p);