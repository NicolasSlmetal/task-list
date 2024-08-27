let listElement = document.querySelector("#app ul") as HTMLUListElement
let inputElement = document.querySelector("#app input") as HTMLInputElement
let buttonElement = document.querySelector("#app button") as HTMLElement

let tasks : Array<string> = []

buttonElement.onclick = addTask

function showTasks(){
    listElement.innerHTML = ""
    tasks.map((item) => {
        let todoElement = document.createElement("li")
        let taskText = document.createTextNode(item)

        todoElement.appendChild(taskText)
        listElement.appendChild(todoElement)
    })    
}

showTasks()

function addTask() : boolean | void{
    if (inputElement.value === ""){
        alert("Digite o nome da tarefa")
        return false
    } else {

        let taskName : string = inputElement.value
        tasks.push(taskName)
        inputElement.value = ""
        showTasks()
        saveTasks()
    }
}

function saveTasks(){
    localStorage.setItem("@task_list", JSON.stringify(tasks))
}