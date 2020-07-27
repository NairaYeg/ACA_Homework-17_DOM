import {isHexColor} from './helpers/validate.js'
import {throwError} from './helpers/throwError.js'

const paragraphs = document.querySelectorAll('.content-item')
const textColor = document.querySelector('.btn-color')
const bgColor = document.querySelector('.btn-bgColor')
const btnApply = document.querySelector('#btn-apply')
const arrOfParagraphs = Array.from(paragraphs)


const changeStyle = ()=>{
    arrOfParagraphs.map((el) => el.style.color = textColor.value)
    arrOfParagraphs.map((el) => el.style. backgroundColor = bgColor.value)
}

btnApply.addEventListener('click', (event)=>{
    event.preventDefault()
    throwError(isHexColor(textColor.value))
    throwError(isHexColor(bgColor.value))
    changeStyle()
    textColor.value = ''
    bgColor.value = ''
})