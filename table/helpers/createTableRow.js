const createTableRow = (student) =>{
    const newRow = tbody.insertRow(tbody.length)
    let fnameCol = newRow.insertCell(0)
    let lnameCol = newRow.insertCell(1)
    let ageCol = newRow.insertCell(2)
    let gradeCol = newRow.insertCell(3)

    fnameCol.innerText = student.fname
    lnameCol.innerText = student.lname
    ageCol.innerText = student.age
    gradeCol.innerText = student.grade

    return newRow;
}

export {createTableRow}