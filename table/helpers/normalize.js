function normalize(fname, lname, age, grade){
    if(!fname.length || !lname.length || !age.value || !grade.value){
       alert('Please fill in all the blanks')
       throw new Error('Input is not valid')
    }

    if(age.value <= 0){
       alert('Age should be a positive integer')
       throw new Error('Input is not valid')
    }

    if(grade.value < 0 || grade.value > 100){
        alert('The grade should be  number between  0-100')
        throw new Error('Input is not valid')
     }
     return;
}

export {normalize}