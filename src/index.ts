let listElement = document.querySelector("#app ul") as HTMLUListElement
let inputElement = document.querySelector("#app input") as HTMLInputElement
let buttonElement = document.querySelector("#app button") as HTMLElement

let tasks : Array<string> = []

function addTask(){
    if (inputElement.value === ""){
        alert("Digite o nome da tarefa")
        return false
    } else {

        let taskName : string = inputElement.value
        tasks.push(taskName)
        inputElement.value = ""
    }
}