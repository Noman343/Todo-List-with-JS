// <!-- $$$$$$$$$$$$$$ TODO LIST  $$$$$$$$$$$$$$$$$$ -->
const form = document.getElementById("form");
const input = document.getElementById("input");
const list_el = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;

  if (task == "") {
    alert("please add something");
  } else {
    const new_task = document.createElement("h1");
    list_el.appendChild(new_task);

    const task_li = document.createElement("input");
    task_li.value = task;
    new_task.appendChild(task_li);

    const delete_btn = document.createElement("button");
    delete_btn.innerHTML = "Delete";
    new_task.appendChild(delete_btn);
    delete_btn.addEventListener("click", () => {
      list_el.removeChild(new_task);
    });
  }
});
