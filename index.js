const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const todoCards = document.getElementsByClassName("todo-cards");

button.addEventListener("click", todoEkle);

function todoEkle() {
  const eklenecekValue = input.value;
  const eklenecekTodo = document.createElement("div");
  const randomSayi = Math.floor(Math.random() * 1000);
  eklenecekTodo.className = "card";
  eklenecekTodo.innerHTML = `
              <input type="checkbox" id=${"checkbox-" + randomSayi} />
              <div>
                <p id=${"text-" + randomSayi}>${eklenecekValue}</p>
              </div>`;

  todoCards[0].appendChild(eklenecekTodo);
  const checkbox = document.getElementById("checkbox-" + randomSayi);
  console.log(checkbox);
  const cardtext = document.getElementById("text-" + randomSayi);
  checkbox.addEventListener("click", () => {
    if (cardtext.classList.contains("furkan")) {
      cardtext.classList.remove("furkan");
    } else {
      cardtext.classList.add("furkan");
    }
  });
}
