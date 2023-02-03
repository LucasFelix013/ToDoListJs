//Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

//Funções
const saveTodo = (text) => {  
    const todo = document.createElement("div");
    todo.classList.add('todo');

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text; // adicionando text
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo"); //criando classe 
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' //Adicionando icone
    todo.appendChild(doneBtn); // Adicionando na div 

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo"); //criando classe 
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>' //Adicionando icone
    todo.appendChild(editBtn); // Adicionando na div 

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo"); //criando classe 
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>' //Adicionando icone
    todo.appendChild(deleteBtn); // Adicionando na div 

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();
    
}


const toggleForms = () => {

    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

//Evento
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Cancelando o envio para o beckend

    const inputValue = todoInput.value; //valor do input

    if (inputValue) { 
        saveTodo(inputValue)
    }
})


document.addEventListener("click", (e) => {

const targetEl = e.target; 
const parentEl = targetEl.closest("div"); // chamando o elmento mais proximo 
let todoTitle;

   if (parentEl && parentEl.querySelector("h3")) {
    odoTitle = parentEl.querySelector("h3").innerText;
  }

  
  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");  //toggle = fazer e desfazer uma ação.
  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();
  }

  if (targetEl.classList.contains("edit-todo")) {
    toggleForms(); // Um novo formulario 

    editInput.value = todoTitle;
    oldInputValue.value = todoTitle; 
  }

})


//Ao click no cancelar dentro de edit
cancelEditBtn.addEventListener("click", (e) => {
   e.preventDefault();

   toggleForms();
})