import {render} from '../script.js'
import { students } from './constants.js'

function normalize(fname, lname, age, grade){
    if(!fname.length || !lname.length || !age.value || !grade.value){
       alert('Please fill in all the blanks')
       render(students)
       throw new Error('Input is not valid')
    }

    if(age.value <= 0){
       render(students)
       alert('Age should be a positive integer')
       throw new Error('Input is not valid')
    }

    if(grade.value < 0 || grade.value > 100){
       render(students)
       alert('The grade should be  number between  0-100')
       throw new Error('Input is not valid')
     }
     return;
}

export {normalize}