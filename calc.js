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
            flag=0;
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'DEL')
        {
            flag=0;
            screenValue ='';
            screen.value = screenValue;
        }
        else if(buttonText == '√x')
        {
            flag=0;
            screen.value=Math.sqrt(screenValue);
        }
        else if(buttonText == '=')
        {
            flag=1;
            screen.value = eval(screenValue);
            screenValue='';
            screenValue += screen.value;
        }
        else if(flag == 1 && !(screenValue.endsWith('+') ||
         screenValue.endsWith('-') || screenValue.endsWith('*') ||
         screenValue.endsWith('/') ) && (buttonText == '0' || buttonText == '1' ||
         buttonText == '2' || buttonText == '3' || buttonText == '4' || buttonText == '5' ||
         buttonText == '6' ||buttonText == '7' ||buttonText == '8' || buttonText == '9' || buttonText == '00'))
        {
            screenValue='';
            screenValue +=buttonText;
            screen.value = screenValue;
            flag=0;
        }
        else if(buttonText == '⬅')
        {
            flag=0;
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else
        {
            flag=0;
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