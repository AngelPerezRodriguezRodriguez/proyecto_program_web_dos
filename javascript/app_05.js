
function nombre() {

    let nombre = prompt("Ingresa tu nombre: ");
    
    alert("Tu nombre es " + nombre);
}

function suma() {

    let numero1 = parseInt(
        prompt("Ingresa el primer número: ", 0));

    
    let numero2 = parseInt(
        prompt("Ingresa el segundo número: ", 0));

    let total = numero1 + numero2;
    
    alert("El total de la suma: " + numero1 + "  + " + numero2 
    + "  = " + total);
}

function and() {
    
    let estado1 = prompt("Ingresa el primer valor booleano: ");
    
    let estado2 = prompt("Ingresa el segundo valor booleano: ");   

    if (estado1.toLowerCase() === "true" 
    && estado2.toLowerCase() === "true")
    {
        alert("Salida: true");
    } else {
        alert("Salida: false");
    } 
}

function or() {
    
    let estado1 = prompt("Ingresa el primer valor booleano: ");
    
    let estado2 = prompt("Ingresa el segundo valor booleano: ");   

    if (estado1.toLowerCase() === "true" 
    || estado2.toLowerCase() === "true")
    {
        alert("Salida: true");
    } else {
        alert("Salida: false");
    } 
}

function not() {

    let estado = prompt("Ingresa un valor booleano: ");

    if (estado.toLowerCase() === "true")
    {
        alert("Salida: false");
    } else {
        alert("Salida: true");
    }
}

function sIf() {

    let numero = parseInt(prompt("Ingresa un número entero: "));
    
    if (numero > 0)
    {
        alert("El número es positivo...");
    } 
    else if (numero < 0)
    {
        alert("El número es negativo...");
    } else {
        alert("Haz escogido el número cero...");
    }
}

function adivina() {

    let numero = parseInt(prompt("Ingresa un número entero: "));

        
        let aleatorio = Math.ceil(Math.random() * 10);
        
        if (numero == aleatorio)
        {
            alert("¡Haz acertado el número!" 
            + "\nNúmero secreto: " + aleatorio);
        } else {
            alert("No haz acertado el número..."
            + "\nNúmero secreto: " + aleatorio);
        }
}