import {isSuperset} from './helpers/isSuperset.js'
import {notSymbols} from './helpers/isSuperset.js'

const textInput = document.querySelector(".text-input")
const inputBody = document.querySelector(".input-body-wrapper")
const inputBodyText = document.querySelector(".input-body")


textInput.addEventListener("click", () =>{
    textInput.value = ""
})

textInput.addEventListener("input", (event)=>{
    let someText = new Set([...event.target.value])
    if(!isSuperset(notSymbols, someText)){
        inputBodyText.innerText=  event.target.value
    }
})