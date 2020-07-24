import getDate from './helpers/getDate.js'
import getTime from './helpers/getTime.js'

const btn = document.querySelector(".btn-datetime")
const calendar = document.querySelector(".date-wrapper")
const clock = document.querySelector(".time-wrapper")

let datetime = {
  time: getTime(),
  date: getDate()
}

function render(datetime){
  calendar.classList.toggle("datetime-inline")
  clock.classList.toggle("datetime-inline")
  calendar.append(datetime.date)
  clock.append(datetime.time)
  datetime.date = " "
  datetime.time = " "
}

btn.addEventListener("click", ()=>{
  render(datetime)
})

