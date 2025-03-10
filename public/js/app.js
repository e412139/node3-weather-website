// const { response } = require("express")

console.log('Client side js file is loading!')

// fetch('https://puzzle.mead.io/puzzle').then((res)=>{
//     res.json().then((d)=>{
//         console.log(d)
//     })
// })



const weatherForm =  document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()//阻止刷新瀏覽器
    console.log(`search = ${search.value}`)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${search.value}`).then((res)=>{
        res.json().then((d)=>{
            if(d.error){
                //Unabled to find location. Try another search
                messageOne.textContent = d.error
                messageTwo.textContent = ""
            }else{
                messageOne.textContent = d.location
                messageTwo.textContent = d.forecast
            }
        })
    })
})