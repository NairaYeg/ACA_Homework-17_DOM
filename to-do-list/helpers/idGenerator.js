const getRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max-min + 1) + min)
  }
  
  
function idGenerator(){
    return new Date().getMilliseconds() * getRandomNumber(0, 1000);
  }

export  {idGenerator} 
  
