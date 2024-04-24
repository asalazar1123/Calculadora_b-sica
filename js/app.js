function resetear(){
    document.getElementById("formulario").reset();
}


function sumar(){
    let num1 = parseInt(document.getElementById("numberone").value);
    let num2 = parseInt(document.getElementById("numbertwo").value);
    document.getElementById('resultado').style.display= "block"
    document.getElementById('resultado').innerText = num1+num2
}


function restar(){
    let num1 = parseInt(document.getElementById("numberone").value);
    let num2 = parseInt(document.getElementById("numbertwo").value);
    document.getElementById('resultado').style.display= "block"
    document.getElementById('resultado').innerText = num1-num2
}

function multiplicar(){
    let num1 = parseInt(document.getElementById("numberone").value);
    let num2 = parseInt(document.getElementById("numbertwo").value);
    document.getElementById('resultado').style.display= "block"
    document.getElementById('resultado').innerText = num1*num2
}

function dividir(){
    let num1 = parseInt(document.getElementById("numberone").value);
    let num2 = parseInt(document.getElementById("numbertwo").value);
    
    // Verificar si num2 es cero para evitar la división por cero
    if (num2 === 0) {
        document.getElementById('resultado').innerText = "Error: División por cero";
    } else {
        let resultado = num1 / num2;
        document.getElementById('resultado').innerText = resultado.toFixed(2);
    }

    document.getElementById('resultado').style.display = "block";
}