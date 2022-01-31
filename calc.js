let screen = document.getElementById('screen');
buttons = document.querySelectorAll('td button');
let screenValue = '';
let flag=0;

for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        console.log('button is',buttonText);

        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'DEL')
        {
            screenValue ='';
            screen.value = screenValue;
        }
        else if(buttonText == '√x')
        {
            screen.value=Math.sqrt(screenValue);
        }
        else if(buttonText == '=')
        {
            flag=1;
            screen.value = eval(screenValue);
            screenValue='';
            screenValue += screen.value;
        }
        else if(flag == 1 && !(screenValue.endsWith('+') || screenValue.endsWith('-') || screenValue.endsWith('*') || screenValue.endsWith('/') ) && (buttonText == '0' || buttonText == '1' || buttonText == '2' || buttonText == '3' || buttonText == '4' || buttonText == '5' || buttonText == '6' ||buttonText == '7' ||buttonText == '8' || buttonText == '9'))
        {
            screenValue='';
            screenValue +=buttonText;
            screen.value = screenValue;
            flag=0;
        }
        else if(buttonText == '⬅')
        {
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else
        {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

// javascript for dark and light mode

let body = document.querySelector('body');
let btn = document.querySelector('.btn');
btn.onclick = function(){
    body.classList.toggle('light');
}