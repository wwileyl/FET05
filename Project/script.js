// DOM Manipulation

/* 
    1. Targetting
    2. Adding an Event/Events
    3. Modifying
*/

// Targetting

// querySelector = target the FIRST OCCURENCE of any element/attribute
// document.querySelector("h1");
// console.log(document.querySelector("h1"));

// querySelectorAll = targets ALL OCCURENCES of any element/attribute
// document.querySelectorAll("h1");
// console.log(document.querySelectorAll("h1"));

/* 
    todo-input
    todo-button
    todo-list
    filter-todo
*/

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");

// Adding an event/events
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// 1. create
// 2. give classes/attributes
// 3. append

// Modifying / Functionality
function addTodo(event) {
    // stops the page from refreshing, since its a submit button
    event.preventDefault();

    // create an element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // add task name to the todoDiv
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;

    // add newTodo to the div
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa fa-check'></i>"
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // add to todo list
    todoList.appendChild(todoDiv);
}

// event = the information of a change on the website
// event.target = the element that the event happened on
// event.type = what kind of event happened

function deleteOrCompleteTodo(event) {
    // console.log(event.target.classList[0]);
    const item = event.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");

        // to wait for transition, we use "transitioned" event
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        // add if not existing, remove if existing
        todo.classList.toggle("completed");
    }
}

function filterTodos(event) {

}