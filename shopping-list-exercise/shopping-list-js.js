const input = document.querySelector('input'); //reference to the input field
const addItemButton = document.querySelector('button'); //reference to the "add item" button
const list = document.querySelector('ul'); //reference to the list element

function updateList() {
    let currentEntry = input.value; //collect user entry in input field
    input.value = ''; //empty the input field

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const newDeleteButton = document.createElement('button');

    //set the text of the new item and button
    span.textContent = currentEntry;
    newDeleteButton.textContent = "delete";

    //create the structure of the new list item
    listItem.appendChild(span);
    listItem.appendChild(newDeleteButton);

    //append the list item to the list
    list.appendChild(listItem);

    newDeleteButton.addEventListener("click", () => {
        listItem.remove();
    });
}

addItemButton.addEventListener("click", updateList);
