import {idGenerator} from './helpers/idGenerator.js'

const input = document.querySelector('#text-input')
const btn = document.querySelector('#submit-btn')
const todoBody = document.querySelector('.todo-body')

const state = {
    inputValue: "",
    todos: []
}

input.addEventListener("input", (event)=>{
    state.inputValue = event.target.value

})


btn.addEventListener("click", (event)=>{
    event.preventDefault()

    if(state.inputValue.trim() === ''){
        return;
    }

    state.todos.push({value: state.inputValue, isComplete: false, id: idGenerator()})
    state.inputValue = ''
    input.value = ''
    render(state)
})


function render(state){
    let list = document.createElement('ol')
    state.todos.forEach((todo) => {

        let listItem = document.createElement('li')

        listItem.innerText = todo.value

        list.appendChild(listItem)

        if(todo.isComplete) {
            listItem.classList.add('task-complete')
        }

        listItem.addEventListener('mouseover', ()=>{
            listItem.style.color = "blue"
            listItem.style.fontSize = "20px"
        })
        
        listItem.addEventListener('mouseout', ()=>{
            listItem.style.color = "black"
            listItem.style.fontSize = "14px"
        })

        listItem.addEventListener("click", function (event) {
             if(listItem === list.childNodes[0]) {
                state.todos = state.todos.map((item) => item.id === todo.id ? {value: todo.value, isComplete: !todo.isComplete, id: todo.id}: item) 
                render(state)
                return;
             }
               
             if(!listItem.previousSibling.hasAttribute("class","task-complete") && !listItem.hasAttribute("class","task-complete")) {
                alert("You haven't done the previous task")
             } else {
                state.todos = state.todos.map((item) => item.id === todo.id ? {value: todo.value, isComplete: !todo.isComplete, id: todo.id}: item) 
                render(state)
                return;
             }   
          });
        
  })      
    todoBody.innerText = ''
    todoBody.append(list)
}


