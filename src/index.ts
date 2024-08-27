let listElement = document.querySelector("#app ul") as HTMLUListElement
let inputElement = document.querySelector("#app input") as HTMLInputElement
let buttonElement = document.querySelector("#app button") as HTMLElement

let tasks : Array<string> = []

buttonElement.onclick = addTask

function addTask() : boolean | void{
    if (inputElement.value === ""){
        alert("Digite o nome da tarefa")
        return false
    } else {

        let taskName : string = inputElement.value
        tasks.push(taskName)
        inputElement.value = ""
    }
}

function saveTasks(){
    localStorage.setItem("@task_list", JSON.stringify(tasks))
}