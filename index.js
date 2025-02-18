const button = document.querySelector('.buttons');
const display1=document.querySelector('.display1 h2');
const ans=document.querySelector('.display2 h2');
const equal=document.getElementById('equal')
const clear=document.getElementById('clear')
const backSpace=document.getElementById('backspace')

let input='';
let answer='';

button.addEventListener('click',(event)=>{
    if(event.target && event.target.classList.contains('num-btn'))
    input+=event.target.innerText
    display1.innerText=input;
    console.log(input);
    
})

equal.addEventListener('click',()=>{
    answer=eval(input);
    ans.innerText=answer;
    console.log(answer);
})

clear.addEventListener('click',()=>{
    input='';
    answer='';

    display1.innerText=input;
    ans.innerText=answer;

})

backSpace.addEventListener('click',()=>{
    input=input.slice(0,-1)
})
