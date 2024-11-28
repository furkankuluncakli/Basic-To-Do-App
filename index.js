const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const todoCards = document.getElementsByClassName("todo-cards");

button.addEventListener("click", todoEkle);

function todoEkle() {
  const eklenecekValue = input.value;
  const eklenecekTodo = document.createElement("div");
  eklenecekTodo.className = "card";
  eklenecekTodo.innerHTML = `
              <input type="checkbox" />
              <div>
                <p>${eklenecekValue}</p>
              </div>`;

  todoCards[0].appendChild(eklenecekTodo);
}
