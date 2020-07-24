function getTime(){
    let hours =  new Date().getHours()
    let minute = new Date().getMinutes()
    let secund = new Date().getSeconds()
    return hours+":"+minute+":"+secund;
  }

  export default getTime