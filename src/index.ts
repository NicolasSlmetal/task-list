let listElement = document.querySelector("#app ul") as HTMLUListElement
let inputElement = document.querySelector("#app input") as HTMLInputElement
let buttonElement = document.querySelector("#app button") as HTMLElement

let storedTasks : string | null = localStorage.getItem("@task_list")

let tasks : Array<string> = storedTasks !== null && JSON.parse(storedTasks) || []

buttonElement.onclick = addTask

function showTasks(){
    listElement.innerHTML = ""
    tasks.map((item) => {
        let todoElement = document.createElement("li")
        let taskText = document.createTextNode(item)

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")
        linkElement.setAttribute("onclick", "removeTask()")
        linkElement.setAttribute("style", "margin-left: 5px")

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)

        todoElement.appendChild(taskText)
        todoElement.appendChild(linkElement)
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

function removeTask(){
    alert("Remove task")
}