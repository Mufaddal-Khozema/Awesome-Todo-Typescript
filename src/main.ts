
const formOne: HTMLElement = document.getElementById('formOne');
const formTwo: HTMLElement = document.getElementById('formTwo');

const todoList: HTMLElement = document.getElementById('todos');
const input: HTMLInputElement = document.querySelector("[name='todo']");

const existingTodos: string[] = JSON.parse(localStorage.getItem('todos')) || [];

const todoData: string[] = [];
        
existingTodos.forEach(todo => {
    addTodo(todo);
})

function addTodo(todoText: string): void {
    todoData.push(todoText);
    const li: HTMLElement = document.createElement('li');
    li.innerHTML = todoText;
    todoList.appendChild(li);
    localStorage.setItem('todos', JSON.stringify(todoData));
    input.value = '';
}

formOne.onsubmit = (event): void => {
    event.preventDefault();
    addTodo(input.value);
}

formTwo.onsubmit = (event): void => {
    event.preventDefault();
    window.localStorage.removeItem('todos');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    };
}












