const btn = document.querySelector(".btn-datetime")
const calendar = document.querySelector(".date-wrapper")
const clock = document.querySelector(".time-wrapper")



function getDate() {
let today = new Date()
let month ;
switch (today.getMonth()) {
  case 0:
     month = "Jan";
    break;
  case 1:
    month = "Feb";
    break;
  case 2:
     month = "Mar";
    break;
  case 3:
    month = "Apr";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "Jun";
    break;
  case 6:
    month = "Jul";
    break;
  case 7:
    month = "Aug";
    break;
  case 8:
    month = "Sep";
    break;
  case 9:
    month = "Oct"; 
  case 10:
    month = "Nov";
    break;
  case 11:
    month = "Dec";
    break;  
}
    return today.getDay() + "-" + month + "-" + today.getFullYear();
}

function getTime(){
  let hours =  new Date().getHours()
  let minute = new Date().getMinutes()
  let secund = new Date().getSeconds()
  return hours+":"+minute+":"+secund;
}

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

