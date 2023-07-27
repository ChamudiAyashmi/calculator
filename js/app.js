let textField = document.getElementById("text");

let btnAc = document.getElementById("btnAc");
let btnDe = document.getElementById("btnDe");
let btnPercentage = document.getElementById("btnPercentage");
let btnDevide = document.getElementById("btnDevide");

let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnMultiply = document.getElementById("btnMultiply");

let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnMinus = document.getElementById("btnMinus");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnAddition = document.getElementById("btnAddition");

let btn0 = document.getElementById("btn0");
let btn00 = document.getElementById("btn00");
let btnDot = document.getElementById("btnDot");
let btnEquals = document.getElementById("btnEquals");

let isDot=false;
let isNum1=false;
let isNum2=false;
let num1="";
let op="";
let num2="";
let total;
btnAc.addEventListener("click", () =>{
    op="";
    num1="";
    num2="";

    textField.value="";
});
btnDe.addEventListener("click", () =>{
    textField.value=textField.value.substr(0,textField.value.length-1);
});

btn7.addEventListener("click", () =>{
    textField.value+='7';
});
btn8.addEventListener("click", () =>{
    textField.value+='8';
});
btn9.addEventListener("click", () =>{
    textField.value+='9';
});
btn4.addEventListener("click", () =>{
    textField.value+='4';
});
btn5.addEventListener("click", () =>{
    textField.value+='5';
});
btn6.addEventListener("click", () =>{
    textField.value+='6';
});
btn1.addEventListener("click", () =>{
    textField.value+='1';
});
btn2.addEventListener("click", () =>{
    textField.value+='2';
});
btn3.addEventListener("click", () =>{
    textField.value+='3';
});
btn0.addEventListener("click", () =>{
    textField.value+='0';
});
btn00.addEventListener("click", () =>{
    textField.value+='00';
});
btnAddition.addEventListener("click", () =>{
    isDot=false;
    op='+';
    num1 =parseFloat(textField.value);
    textField.value="";
    
});
btnMinus.addEventListener("click", () =>{
    op='-';
    num1=parseFloat(textField.value);
    textField.value='';
});
btnMultiply.addEventListener("click", () =>{
    op='*';
    num1=parseFloat(textField.value);
    textField.value='';
});
btnDevide.addEventListener("click", () =>{
    op='/';
    num1=parseFloat(textField.value);
    textField.value='';
});
btnDot.addEventListener("click", () => {
    if (!textField.value.includes(".")) {
        textField.value += ".";
    }
});
btnPercentage.addEventListener("click", () =>{
    op='%';
    num1=parseFloat(textField.value);
    textField.value=num1/100;
    num1=textField.value;
});
btnEquals.addEventListener("click", () =>{
    num2=parseFloat(textField.value);
    operator();
    textField.value=total;
});
function operator(){
    switch(op){
        case "+" : 
        total=num1+num2;break;
        case "-" : 
        total=num1-num2;break;
        case "*" : 
        total=num1*num2;break;
        case "/" : 
        total=num1/num2;
    }
    num1=total;
    num2="";
}