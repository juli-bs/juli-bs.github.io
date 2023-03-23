if(JSON.parse(localStorage.getItem("todos")) == null) {
   let temp = [];
   localStorage.setItem("todos", JSON.stringify(temp));
}

let todos = [];
todos = JSON.parse(localStorage.getItem('todos'));

const inputfield = document.getElementById("inputfield");
const todosection = document.getElementById("todosection");


function addTodo() {
   if(inputfield.value != "") {
      todos.push(inputfield.value);
      showTodos();
      inputfield.value = "";
   }
}

function removeTodo(i) {
   todos.splice(i, 1);
   showTodos();
}

function editTodo(i) {
   inputfield.value = todos[i];
   todos.splice(i, 1);
   showTodos();
}

function showTodos() {
   let text = "";
   for(let i = 0; i < todos.length; i++) {
      if(i == 0) {
         text += "<div id='todo' style='border-top: 2px solid #050022;border-bottom: 2px solid #050022;'>" + todos[i];
      } else {
         text += "<div id='todo' style='border-bottom: 2px solid #050022;'>" + todos[i];
      }
      text += "<button id='removebutton' onclick='removeTodo(" + i + ");'><span>Remove</span></button>";
      text += "<button id='editbutton' onclick='editTodo(" + i + ");'><span>Edit</span></button>";
      text += "</div>";
   }

   todosection.innerHTML = text;
   localStorage.setItem("todos", JSON.stringify(todos));
}

// alternative to add-button
inputfield.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
   // Code, der ausgeführt wird, wenn die Enter-Taste gedrückt wird
      addTodo();
   }
});

showTodos();
