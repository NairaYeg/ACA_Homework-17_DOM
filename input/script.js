const textInput = document.querySelector(".text-input")
const inputBodyText = document.querySelector(".input-body")

textInput.addEventListener("input", (event)=>{
        inputBodyText.innerText = event.target.value
})