let toDoArray = [];
let inputValue, toDoElements, newHTML;


// Function that gets the Input Value from the Text Box
function getInput() {
    inputValue = document.querySelector('#input-box').value;
    inputDate = document.querySelector('#input-date').value;

    toDoArray.push({event: inputValue, dueDate: inputDate});
    
    document.querySelector('#input-box').value = '';
    document.querySelector('#input-date').value = '';

    createItem();
}


// Function to create and add the Elements in the To-Do List
function createItem() {
    toDoElements = document.querySelector('.todo-elements');
    newHTML = ''
    for (let i = 0; i < toDoArray.length; i++) {
        newHTML += `<div id = "event-items">
                        <span>${toDoArray[i].event}</span>
                        <span>${toDoArray[i].dueDate}</span>
                        <button class = "delete-item" onclick = "toDoArray.splice(${i}, 1); createItem();">Delete</button>
                    </div>`;

    }
    toDoElements.innerHTML = newHTML;
}