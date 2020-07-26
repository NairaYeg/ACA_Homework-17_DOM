import {normalize} from './helpers/normalize.js'

const table = document.querySelector('#table')
const tbody = document.querySelector('#tbody')
const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const age = document.querySelector('#age')
const grade = document.querySelector('#grade')
const addBtn = document.querySelector('#add-btn')

function addTableRow () {
    const newRow = tbody.insertRow(tbody.length)
    const fnameCell = newRow.insertCell(0)
    const lnameCell = newRow.insertCell(1)
    const ageCell = newRow.insertCell(2)
    const gradeCell = newRow.insertCell(3)
    
     fnameCell.innerText = fname.value
     lnameCell.innerText = lname.value
     ageCell.innerText = age.value
     gradeCell.innerText = grade.value
}


addBtn.addEventListener('click', ()=>{
    console.log(age.value)
    normalize(fname.value, lname.value, age, grade)
    addTableRow()
    fname.value = ''
    lname.value = ''
    age.value = ''
    grade.value = ''
})