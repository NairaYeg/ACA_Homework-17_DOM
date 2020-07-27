import {normalize} from './helpers/normalize.js'
import {removeAllRows} from './helpers/removeAllRows.js'
import {sortingOrders, students} from './helpers/constants.js'
import {sortAge} from './helpers/sort.js'
import {addTableRow} from './helpers/addTableRow.js'


const table = document.querySelector('#table')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const age = document.querySelector('#age')
const grade = document.querySelector('#grade')
const addBtn = document.querySelector('#add-btn')
const ageColumn = document.querySelector('#ageCol')
const tbody = document.querySelector('#tbody')
const sortIcon = ageCol.querySelector(".sort-icon");

const render = (students) =>{
    students.forEach((student) => {
        addTableRow(student)
    });
}

addBtn.addEventListener('click', ()=>{
    removeAllRows(tbody)
    normalize(fname.value, lname.value, age, grade)
    students.push({fname: `${fname.value}`, lname: `${lname.value}`, age: `${age.value}`, grade: `${grade.value}`})
    fname.value = ''
    lname.value = ''
    age.value = ''
    grade.value = ''
    render(students)

})

ageCol.addEventListener('click', () =>{
      removeAllRows(tbody)
      console.log(sortAge(students))
      render(sortAge(students))
})