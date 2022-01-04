var formOne = document.getElementById('formOne');
var formTwo = document.getElementById('formTwo');
var todoList = document.getElementById('todos');
var input = document.querySelector("[name='todo']");
var existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
var todoData = [];
existingTodos.forEach(function (todo) {
    addTodo(todo);
});
function addTodo(todoText) {
    todoData.push(todoText);
    var li = document.createElement('li');
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = '';
}
formOne.onsubmit = function (event) {
    event.preventDefault();
    addTodo(input.value);
};
formTwo.onsubmit = function (event) {
    event.preventDefault();
    window.localStorage.removeItem('todos');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
    ;
};
// const formOne: HTMLElement = document.getElementById('formOne');
// const formTwo: HTMLElement = document.getElementById('formTwo');
// const todoList: HTMLElement = document.getElementById('todos');
// const input: HTMLInputElement = document.querySelector("[name='todo']");
// const existingTodos: string[] = JSON.parse(localStorage.getItem('todos')) || [];
// const todoData: string[] = [];
// existingTodos.forEach(todo => {
//     addTodo(todo);
// })
// function addTodo(todoText: string): void {
//     todoData.push(todoText);
//     const li: HTMLElement = document.createElement('li');
//     li.innerHTML = todoText;
//     todoList.appendChild(li);
//     localStorage.setItem('todos', JSON.stringify(todoData));
//     input.value = '';
// }
// formOne.onsubmit = (event): void => {
//     event.preventDefault();
//     addTodo(input.value);
// }
// formTwo.onsubmit = (event): void => {
//     event.preventDefault();
//     window.localStorage.removeItem('todos');
//     while (todoList.firstChild) {
//         todoList.removeChild(todoList.lastChild);
//     };
// }
