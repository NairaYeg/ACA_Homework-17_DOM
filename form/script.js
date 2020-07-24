const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const email = document.querySelector('#email')
const submitBtn = document.querySelector("#submit-btn")

let userInfo = {
    fname: " ",
    lname: " ",
    email: " "
}

fname.addEventListener("input", (event)=>{
    userInfo.fname = event.target.value
})

lname.addEventListener("input", (event)=>{
    userInfo.lname = event.target.value
})

email.addEventListener("input", (event)=>{
    userInfo.email = event.target.value
})

submitBtn.addEventListener("click", ()=>{
    let info = JSON.stringify(userInfo)
    alert(info)
})