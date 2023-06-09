/*
Author: szekeres miklos
Copyright: 2023, szekeres miklos 
Group: Szoft I-2 N
Date: 2023-06-09
Github: https://github.com/hiimmikescott
Licenc: GNU GPL
*/

var aside = document.querySelector('#aside');
var bside = document.querySelector('#bside');
var cside = document.querySelector('#cside');
var volumeoutput = document.querySelector('#volume');
var calcButton = document.querySelector('#calcButton');


if(calcButton){
calcButton.addEventListener('click', () => {
    workInput();
});
}

function workInput()
{   
    var cehek1 = checkInput(aside.value);
    var cehek2 = checkInput(bside.value);
    var cehek3 = checkInput(cside.value);
    if(cehek1 == true && cehek2 == true && cehek3 == true)
    {
    let a = Number(aside.value);
    let b = Number(bside.value);
    let c = Number(cside.value);
    let volume = calcTriangleArea(a, b, c);
    volumeoutput.value = volume;
    }
    else
    {
        alert("pavarotti szomoru lenne :(");
    }

}

function calcTriangleArea(a, b, c)
{
    return a * b * c;
}

function checkInput(input){
    if(input.match(/^[0-9]+$/)){
        return true;
    }else{
        return false;
    }
    
}
