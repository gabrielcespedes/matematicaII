function bienvenidos4() {
    text = "";
    row.innerHTML = text;
    pie_pagina.innerHTML = text;
    ejercicio_modulo4();
}

function ejercicio_modulo4() {
    text += `<div class="card mx-auto my-2" style="width: 36rem;">
    <div class="card-body text-dark">
        <h5 class="card-title">Recuerda que puedes usar la relación entre <strong>suma</strong> y <strong>resta</strong> como una estrategia para obtener valores inicialmente desconocidos.</h5>
    </div>
    <img src="assets/imgs/t1_4_1.JPG" class="card-img-top">
    </div>
    <h2>Obtén el valor desconocido para cada caso:</h2>`;    

    numeros = [];
    for (i=1; i<=12; i++){
        numeros.push(Math.floor(Math.random()*20));
    }

    let lista_ejercicios_1_4 = [];
    lista_ejercicios_1_4 = [
        [numeros[0] + numeros[1], numeros[1]],
        [numeros[1] + numeros[2], numeros[2]],
        [numeros[2] + numeros[3], numeros[3]],
        [numeros[3] + numeros[4], numeros[4]],
        [numeros[4] + numeros[5], numeros[5]],
        [numeros[5] + numeros[6], numeros[6]],
        [numeros[7] + 20 - numeros[8], numeros[7] + 20],
        [numeros[8] + 20 - numeros[9], numeros[8] + 20],
        [numeros[9] + 20 - numeros[10], numeros[9] + 20],
        [numeros[10] + 20 - numeros[11], numeros[10] + 20],
    ];

    console.log(lista_ejercicios_1_4);

    for (i = 1; i<=6; i++) {
        text += `<div class="card mx-auto my-2" style="width: 18rem;">
        <div class="card-body text-dark">
        ${numeros[i-1]} + <input id="input_1_4_${i}" class="input_3 text-center" placeholder = "?"> = ${lista_ejercicios_1_4[i-1][0]}
        <button id="save_1_4_${i}" class="bg-secondary text-white">Guardar</button> 
        </div>
        <h1 id="hcard_1_4_${i}"></h1>
        </div>
        `;
    }

    for (i = 1; i <= 4; i++) {
        text += `<div class="card mx-auto my-2" style="width: 18rem;">
        <div class="card-body text-dark">
        <input id="input_1_4_${i + 6}" class="input_3 text-center" placeholder = "?"> - ${numeros[i+7]} = ${lista_ejercicios_1_4[i+5][0]}
        <button id="save_1_4_${i + 6}" class="bg-secondary text-white">Guardar</button>
        </div>
        <h1 id="hcard_1_4_${i + 6}"></h1>
        </div> 
        `
    }

    row.innerHTML = text + `<p class = "fs-5 bg-secondary">Fuente imágenes: Matemática 2° básico Carolina Ubilla - Vanesa Cerda. Santillana.</p>`;

    let input_1_4 = [];
    let save_1_4 = [];
    let h_card_1_4 = [];

    for (i = 1; i <= 10; i++) {
        input_1_4.push(document.getElementById('input_1_4_' + i));
        save_1_4.push(document.getElementById('save_1_4_' +  i));
        h_card_1_4.push(document.getElementById('hcard_1_4_' +  i));   
    }

    correctas = 0;

    function funcion_Alerta_1_4_1() {
        let valor=input_1_4[0].value;
        if (valor == lista_ejercicios_1_4[0][1]) {
            h_card_1_4[0].style.backgroundColor = "Lime";
            h_card_1_4[0].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[0].style.backgroundColor = "red";
            h_card_1_4[0].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_2() {
        let valor=input_1_4[1].value;
        if (valor == lista_ejercicios_1_4[1][1]) {
            h_card_1_4[1].style.backgroundColor = "Lime";
            h_card_1_4[1].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[1].style.backgroundColor = "red";
            h_card_1_4[1].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_3() {
        let valor=input_1_4[2].value;
        if (valor == lista_ejercicios_1_4[2][1]) {
            h_card_1_4[2].style.backgroundColor = "Lime";
            h_card_1_4[2].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[2].style.backgroundColor = "red";
            h_card_1_4[2].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_4() {
        let valor=input_1_4[3].value;
        if (valor == lista_ejercicios_1_4[3][1]) {
            h_card_1_4[3].style.backgroundColor = "Lime";
            h_card_1_4[3].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[3].style.backgroundColor = "red";
            h_card_1_4[3].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_5() {
        let valor=input_1_4[4].value;
        if (valor == lista_ejercicios_1_4[4][1]) {
            h_card_1_4[4].style.backgroundColor = "Lime";
            h_card_1_4[4].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[4].style.backgroundColor = "red";
            h_card_1_4[4].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_6() {
        let valor=input_1_4[5].value;
        if (valor == lista_ejercicios_1_4[5][1]) {
            h_card_1_4[5].style.backgroundColor = "Lime";
            h_card_1_4[5].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[5].style.backgroundColor = "red";
            h_card_1_4[5].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_7() {
        let valor=input_1_4[6].value;
        if (valor == lista_ejercicios_1_4[6][1]) {
            h_card_1_4[6].style.backgroundColor = "Lime";
            h_card_1_4[6].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[6].style.backgroundColor = "red";
            h_card_1_4[6].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_8() {
        let valor=input_1_4[7].value;
        if (valor == lista_ejercicios_1_4[7][1]) {
            h_card_1_4[7].style.backgroundColor = "Lime";
            h_card_1_4[7].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[7].style.backgroundColor = "red";
            h_card_1_4[7].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_9() {
        let valor=input_1_4[8].value;
        if (valor == lista_ejercicios_1_4[8][1]) {
            h_card_1_4[8].style.backgroundColor = "Lime";
            h_card_1_4[8].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[8].style.backgroundColor = "red";
            h_card_1_4[8].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_4_10() {
        let valor=input_1_4[9].value;
        if (valor == lista_ejercicios_1_4[9][1]) {
            h_card_1_4[9].style.backgroundColor = "Lime";
            h_card_1_4[9].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 10) {
                siguiente_modulo_5();
            }
        } else {
            h_card_1_4[9].style.backgroundColor = "red";
            h_card_1_4[9].innerHTML = "Incorrecto";
        }
    }

    save_1_4[0].addEventListener("click", funcion_Alerta_1_4_1);
    save_1_4[1].addEventListener("click", funcion_Alerta_1_4_2);
    save_1_4[2].addEventListener("click", funcion_Alerta_1_4_3);
    save_1_4[3].addEventListener("click", funcion_Alerta_1_4_4);
    save_1_4[4].addEventListener("click", funcion_Alerta_1_4_5);
    save_1_4[5].addEventListener("click", funcion_Alerta_1_4_6);
    save_1_4[6].addEventListener("click", funcion_Alerta_1_4_7);
    save_1_4[7].addEventListener("click", funcion_Alerta_1_4_8);
    save_1_4[8].addEventListener("click", funcion_Alerta_1_4_9);
    save_1_4[9].addEventListener("click", funcion_Alerta_1_4_10);

    function siguiente_modulo_5() {
        pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos5() class="me-auto">Siguiente</button></span> `;
        location.href="#pie_de_pagina";
    }

}