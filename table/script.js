import {normalize} from './helpers/normalize.js'
import {removeAllRows} from './helpers/removeAllRows.js'
import {sortingOrders, students} from './helpers/constants.js'
import {sortAge} from './helpers/sort.js'
import {addTableRow} from './helpers/addTableRow.js'

const body = document.querySelector('body')
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
    let [first, ...rest] = students // slice first element of students , students[0] === {order: sortingOrders.random}
    rest.forEach((student) => {
        addTableRow(student)
    });
}

body.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        removeAllRows(tbody)
        normalize(fname.value, lname.value, age, grade)
        students.push({fname: `${fname.value}`, lname: `${lname.value}`, age: `${age.value}`, grade: `${grade.value}`})
        fname.value = ''
        lname.value = ''
        age.value = ''
        grade.value = ''
        render(students)
    }
})

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

ageCol.addEventListener('click', (event) =>{
    switch (students[0].order) {
        case sortingOrders.random:
            students[0].order = sortingOrders.asc;
          break;
        case sortingOrders.asc:
            students[0].order = sortingOrders.desc;
          break;
        case sortingOrders.desc:
            students[0].order = sortingOrders.random;
          break;
        default:
          throw new Error(`${students[0].order} is not an valid order!`);
    }
    removeAllRows(tbody)
    render(sortAge(students, students[0].order))
})