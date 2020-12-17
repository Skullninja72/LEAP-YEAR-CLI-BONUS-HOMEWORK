var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



btnTranslate.addEventListener("click",clickHandler);

function checkLeapYear(year)
{ 
    
     n1 = parseInt(year)
  if ((0 == n1 % 4) && (0 != n1 % 100) || (0 == n1 % 400)) {
        op = "is a leap year"
    } else {
        op = "is not a leap year "
    }
    return op;
}





function clickHandler(){
     var year = txtinput.value;

     var result = checkLeapYear(year);
     outputDiv.innerText = result;
};