let lista_imagenes_numeros = [[1, 73], [2, 61], [3, 50], [4, 97]];

lista_imagenes_numeros_desordenada = [];
    for (i=1; i<=4; i++) {
        lista_imagenes_numeros_desordenada.push(lista_imagenes_numeros[i-1]);
    }

lista_imagenes_numeros_desordenada = lista_imagenes_numeros_desordenada.sort(function() {
    return Math.random()-0.5
})

let text = `
<h2 class = "mt-3">Unidad 1: Números</h2>
<div class="container">
    <div class="card m-auto" style="width: 18rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">Recuerda:</h5>
        </div>
        <img src="assets/imgs/t1-1.PNG" class="card-img-top">
    </div>
</div>
<h2 class="mt-3">Escribe el número representado.</h2>
<div id="contenedor_fila" class="row">            
</div>
`;

row = document.getElementById('contenedor_fila');

for (i = 1 ; i<=4; i++) {
    text += `<div class="card mx-auto my-3" style="width: 18rem;">
    <div class="card-body text-dark d-inline">
        <input id="input_1_${i}">
        <button id="save_1_${i}" class="bg-secondary text-white">Guardar</button>
    </div>
    <img src="assets/imgs/1-${lista_imagenes_numeros_desordenada[i-1][0]}.PNG" class="card-img-top">
    <h1 id="hcard_1_${i}"></h1>
</div>
    `
}

row.innerHTML = text + `<p class = "fs-5 bg-secondary">Fuente imágenes: Matemática 2° básico Carolina Ubilla - Vanesa Cerda. Santillana.</p>`;

let input_1 = []
let save_1 = []
let h_card_1 = []

for (i=1; i<=4; i++) {
    input_1.push(document.getElementById('input_1_'+i));
    save_1.push(document.getElementById('save_1_'+i));
    h_card_1.push(document.getElementById('hcard_1_'+i));
}
correctas = 0;

pie_pagina = document.getElementById('pie_de_pagina');

function funcion_Alerta_1_1() {
    let valor=input_1[0].value;
    if (valor == lista_imagenes_numeros_desordenada[0][1]) {
        console.log("Correcto");
        h_card_1[0].style.backgroundColor = "Lime";
        h_card_1[0].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_1[0].style.backgroundColor = "red";
        h_card_1[0].innerHTML = "Incorrecto";
    }
    if (correctas == 4) {
        siguiente_modulo();
    }
}

function funcion_Alerta_1_2() {
    let valor=input_1[1].value;
    if (valor == lista_imagenes_numeros_desordenada[1][1]) {
        console.log("Correcto");
        h_card_1[1].style.backgroundColor = "Lime";
        h_card_1[1].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_1[1].style.backgroundColor = "red";
        h_card_1[1].innerHTML = "Incorrecto";
    }
    if (correctas == 4) {
        siguiente_modulo();
    }
}

function funcion_Alerta_1_3() {
    let valor=input_1[2].value;
    if (valor == lista_imagenes_numeros_desordenada[2][1]) {
        console.log("Correcto");
        h_card_1[2].style.backgroundColor = "Lime";
        h_card_1[2].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_1[2].style.backgroundColor = "red";
        h_card_1[2].innerHTML = "Incorrecto";
    }
    if (correctas == 4) {
        siguiente_modulo();
    }
}

function funcion_Alerta_1_4() {
    let valor=input_1[3].value;
    if (valor == lista_imagenes_numeros_desordenada[3][1]) {
        console.log("Correcto");
        h_card_1[3].style.backgroundColor = "Lime";
        h_card_1[3].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_1[3].style.backgroundColor = "red";
        h_card_1[3].innerHTML = "Incorrecto";
    }
    if (correctas == 4) {
        siguiente_modulo();
    }
}

function siguiente_modulo() {
    pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos() id="siguiente_modulo" class="me-auto">Siguiente</button></span> `;
    location.href="#pie_de_pagina";

}

save_1[0].addEventListener("click", funcion_Alerta_1_1);
save_1[1].addEventListener("click", funcion_Alerta_1_2);
save_1[2].addEventListener("click", funcion_Alerta_1_3);
save_1[3].addEventListener("click", funcion_Alerta_1_4);








