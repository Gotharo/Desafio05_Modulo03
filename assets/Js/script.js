let tasks = []
let nextId = 4

const placeHoldTasks = [
  { id: 1, text: "Hacer mercado", completed: false },
  { id: 2, text: "Estudiar para la prueba", completed: false },
  { id: 3, text: "Sacar a pasear a Tobby", completed: false }
];

const input = document.querySelector("#inputTask")
const btnAdd = document.querySelector("#btn-add")
const listTask = document.querySelector("#task-list")

for (const tarea of placeHoldTasks) {
    tasks.push(tarea);
}

function renderTask(taskArray) {
    document.getElementById("total").innerHTML = `Total: <b>${taskArray.length}</b>`;
    document.getElementById("realizadas").innerHTML = `Realizadas: <b>${taskArray.filter(t => t.completed).length}</b>`;
    listTask.innerHTML = "";
    // Usando for...of para recorrer y renderizar
    for (const [index, task] of taskArray.entries()) {
        listTask.innerHTML += `<tr>
            <td>${task.id}</td>
            <td>${task.text}</td>
            <td>
                <input type="checkbox" ${task.completed ? "checked" : ""} onclick="taskCompleted(${index})">
            </td>
            <td>
                <span onClick="killTask(${index})" class="delete-btn"> ✖ </span>
            </td>
        </tr>`;
    }
}

function taskCompleted(i) {
    tasks[i].completed = !tasks[i].completed
    renderTask(tasks)
}

function killTask(i) {
    tasks.splice(i, 1)
    renderTask(tasks)
}

btnAdd.addEventListener("click", () => {
    const newTask = input.value.trim()
    if(newTask) {
        tasks.push({ id: nextId++, text: newTask, completed: false })
        renderTask(tasks)
    }
    input.value = ""
})

renderTask(tasks)