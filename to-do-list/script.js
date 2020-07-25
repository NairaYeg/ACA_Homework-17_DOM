// import {getRandomNumber} from './helpers/idGenerator.js'
// import {idGenerator} from './helpers/idGenerator.js'



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
  }
  
  
function idGenerator(){
    return new Date().getMilliseconds() * getRandomNumber(0, 1000);
  }

  
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

        // listItem.addEventListener('click', (event)=>{
        //    if(todo.id === state.todos[0].id){
        //        state.todos[0].isComplete = !state.todos[0].isComplete 
        //        render(state)
        //    }else{
        //        let prevSIbling = state.todos.filter((todo) => todo.value === listItem.previousSibling.innerText)
        //        if(prevSIbling[0].isComplete){
        //        state.todos = state.todos.map((item) => {todo.id === item.id ? {value: item.value, isComplete: !item.isComplete, id: item.id}:todo})
        //         //   listItem.classList.add('task-complete')
        //         render(state)
        //     }
        //         render(state);
        //    }
        // })
  })      
    todoBody.innerText = ''
    todoBody.append(list)
}


