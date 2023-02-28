function numeros_azar() {
    let numeros = [];
    for (i=1; i<=10; i++){
        numeros.push(Math.floor(Math.random()*35 + 10));
    }
    return numeros;
}

let lista1 = numeros_azar();
let lista2 = numeros_azar();
let lista3 = numeros_azar();
let lista4 = numeros_azar();
let lista5 = numeros_azar();
let lista6 = numeros_azar();
let lista7 = numeros_azar();
let lista8 = numeros_azar();

let matriz_numeros = [lista1, lista2, lista3, lista4, lista5, lista6, lista7, lista8];

function suma_lista(lista) {
    let suma = 0;
    for (i=1; i<=10; i++) {
        suma += Number(lista[i-1]); 
    }
    return suma;
}

let respuestas = [Math.round(suma_lista(lista1)/10),Math.round(suma_lista(lista2)/10),Math.round(suma_lista(lista3)/10),Math.round(suma_lista(lista4)/10),Math.round(suma_lista(lista5)/10),Math.round(suma_lista(lista6)/10),Math.round(suma_lista(lista7)/10),Math.round(suma_lista(lista8)/10)]

let text = `
<h2 class = "mt-3">Repaso Promedio</h2>
<div class="container">
    <div class="card m-auto" style="width: 36rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">Recuerda que dentro de las medidas de tendencia central, está el promedio, que consiste en la suma de todos los valores de una variable dividido por la cantidad de datos.</h5>
        </div>        
    </div>
</div>
<h2 class="mt-3">Calcule el promedio para cada caso. (Redondee al <strong>entero</strong>).</h2>
<div id="contenedor_fila" class="row">            
</div>
`;

row = document.getElementById('contenedor_fila');

let string_table='';

let text2 = '';

lista_numeros = numeros_azar(); 

for (i=1; i<=8; i++) {         
    for (j=1; j<=10; j++) {
        string_table += `<td class="text-center">${matriz_numeros[i-1][j-1]} </td>`
    }
    text += `<div class="card mx-auto my-3" style="width: 36rem;">
    <div class="card-body text-dark d-inline">
        <table class = "table table-bordered">
        <tr>
            ${string_table}
        </tr>
        </table>
        <input id="input_3m_1_${i}" class="input_2">
        <button id="save_3m_1_${i}" class="bg-secondary text-white">Guardar</button>
    </div>
    <h1 id="hcard_3m_1_${i}"></h1>
    </div>
    `
    string_table = '';  
}

row.innerHTML = text + text2;

console.log(matriz_numeros);

let input_3m_1 = []
let save_3m_1 = []
let h_card_3m_1 = []

for (i=1; i<=8; i++) {
    input_3m_1.push(document.getElementById('input_3m_1_'+i));
    save_3m_1.push(document.getElementById('save_3m_1_'+i));
    h_card_3m_1.push(document.getElementById('hcard_3m_1_'+i));
}
correctas = 0;

pie_pagina = document.getElementById('pie_de_pagina');

function funcion_Alerta_3m_1_1() {
    let valor=input_3m_1[0].value;
    if (valor == respuestas[0]) {
        h_card_3m_1[0].style.backgroundColor = "Lime";
        h_card_3m_1[0].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[0].style.backgroundColor = "red";
        h_card_3m_1[0].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_2() {
    let valor=input_3m_1[1].value;
    if (valor == respuestas[1]) {
        h_card_3m_1[1].style.backgroundColor = "Lime";
        h_card_3m_1[1].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[1].style.backgroundColor = "red";
        h_card_3m_1[1].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_3() {
    let valor=input_3m_1[2].value;
    if (valor == respuestas[2]) {
        h_card_3m_1[2].style.backgroundColor = "Lime";
        h_card_3m_1[2].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[2].style.backgroundColor = "red";
        h_card_3m_1[2].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_4() {
    let valor=input_3m_1[3].value;
    if (valor == respuestas[3]) {
        h_card_3m_1[3].style.backgroundColor = "Lime";
        h_card_3m_1[3].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[3].style.backgroundColor = "red";
        h_card_3m_1[3].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_5() {
    let valor=input_3m_1[4].value;
    if (valor == respuestas[4]) {
        h_card_3m_1[4].style.backgroundColor = "Lime";
        h_card_3m_1[4].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[4].style.backgroundColor = "red";
        h_card_3m_1[4].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_6() {
    let valor=input_3m_1[5].value;
    if (valor == respuestas[5]) {
        h_card_3m_1[5].style.backgroundColor = "Lime";
        h_card_3m_1[5].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[5].style.backgroundColor = "red";
        h_card_3m_1[5].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_7() {
    let valor=input_3m_1[6].value;
    if (valor == respuestas[6]) {
        h_card_3m_1[6].style.backgroundColor = "Lime";
        h_card_3m_1[6].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[6].style.backgroundColor = "red";
        h_card_3m_1[6].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function funcion_Alerta_3m_1_8() {
    let valor=input_3m_1[7].value;
    if (valor == respuestas[7]) {
        h_card_3m_1[7].style.backgroundColor = "Lime";
        h_card_3m_1[7].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_1[7].style.backgroundColor = "red";
        h_card_3m_1[7].innerHTML = "Incorrecto";
    }
    if (correctas == 8) {
        siguiente_modulo_3m_1_2();
    }
}

function siguiente_modulo_3m_1_2() {
    pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos3m_1_2() class="me-auto">Siguiente</button></span> `;
    location.href="#pie_de_pagina";
}

save_3m_1[0].addEventListener("click", funcion_Alerta_3m_1_1);
save_3m_1[1].addEventListener("click", funcion_Alerta_3m_1_2);
save_3m_1[2].addEventListener("click", funcion_Alerta_3m_1_3);
save_3m_1[3].addEventListener("click", funcion_Alerta_3m_1_4);
save_3m_1[4].addEventListener("click", funcion_Alerta_3m_1_5);
save_3m_1[5].addEventListener("click", funcion_Alerta_3m_1_6);
save_3m_1[6].addEventListener("click", funcion_Alerta_3m_1_7);
save_3m_1[7].addEventListener("click", funcion_Alerta_3m_1_8);