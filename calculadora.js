let numero =  parseInt(prompt("Ingrese su numero"));
let numero2 = parseInt(prompt ("Ingrese otro numero"));
let operacion = prompt("Ingrese +, - , * o /");


let resultadoSuma = (numero + numero2);
let resultadoResta = (numero - numero2);
let resultadoMult = (numero * numero2);
let resultadoDiv = (numero / numero2);


if (operacion == "+") {
    alert(resultadoSuma);
} 
else if (operacion == "-") {
    alert(resultadoResta);    
} 
else if (operacion == "*") {
    alert(resultadoMult);
}
else (operacion == "/"); {
    alert(resultadoDiv);
}


