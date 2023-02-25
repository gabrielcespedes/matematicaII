function bienvenidos3() {
    text = ""
    row.innerHTML = text;
    pie_pagina.innerHTML = text;
    ejercicio_modulo3();
}

function ejercicio_modulo3() {
    let text = `
    <div class="card mx-auto my-2" style="width: 18rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">Recuerda que en las situaciones de Juntar, Agregar, Avanzar, etc. se puede usar la operación <strong>Suma</strong></h5>
        </div>
        <img src="assets/imgs/t1-3-1.JPG" class="card-img-top">
    </div>
    <div class="card mx-auto my-2" style="width: 18rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">Recuerda que en las situaciones de Separar, Quitar, Retroceder, etc. se puede usar la operación <strong>Resta</strong></h5>
        </div>
        <img src="assets/imgs/t1-3-2.JPG" class="card-img-top">
    </div>
    <h2>Resuelve ahora los siguientes problemas:</h2>       
    `;

    numeros = [];
    for (i=1; i<=8; i++){
        numeros.push(Math.floor(Math.random()*30));
    }

    let lista_ejercicios_1_3 = [];
    lista_ejercicios_1_3 = [
        [`Se juntan ${numeros[0]} lápices rosados con ${numeros[0+1]} lápices amarillos. ¿Cuántos lápices hay en total?`, numeros[0] + numeros[1]],
        [`De un total de ${30+numeros[1]} manzanas se quitan ${numeros[1+1]} manzanas. ¿Cúantas manzanas quedan?`, 30+numeros[1]-numeros[2]],
        [`Se estacionan en una mañana ${numeros[2]} autos y en el resto del día ${numeros[2+1]} autos. ¿Cuántos autos se estacionaron durante el día?`, numeros[2] + numeros[3]],
        [`Al dueño de un negocio le llegan ${numeros[3]} yogures sin lactosa y ${numeros[3+1]} yogures con lactosa. ¿Cuántos yogures llegaron en total?`, numeros[3] + numeros[4]],
        [`En un juego de mesa, Amparo está en la casilla ${30+numeros[4]} y tiene que retroceder ${numeros[5]} lugares. ¿A qué casilla llegará?`, 30+numeros[4] - numeros[5]],
        [`En una bandeja hay ${numeros[5]} lápices. Si se sacaron anteriormente ${numeros[6]} lápices azules, ¿Cuántos lápices había inicialmente?`, numeros[5] + numeros[6]],
        [`Un niño está a ${30 + numeros[6]} metros del colegio. Después de un rato, él ha avanzado ${numeros[7]} metros. ¿Cuántos metros le faltan para llegar al colegio?`, 30 + numeros[6] - numeros[7]],
        [`En una granja hay ${30 + numeros[7]} animales. ${numeros[0]} son caballos y el resto vacas. ¿Cuántas vacas hay en la granja?`, 30+numeros[7] - numeros[0]]
    ];

    lista_ejercicios_1_3_desordenada = [];
    for (i=1; i<=8; i++) {
        lista_ejercicios_1_3_desordenada.push(lista_ejercicios_1_3[i-1]);
    }
    
    lista_ejercicios_1_3_desordenada = lista_ejercicios_1_3_desordenada.sort(function() {
        return Math.random()-0.5
    })

    console.log(lista_ejercicios_1_3);
    console.log(lista_ejercicios_1_3_desordenada);

    for (i = 1 ; i<=8; i++) {
        text += `<div class="card mx-auto my-2" style="width: 18rem;">
        <div class="card-body text-dark">
            ${lista_ejercicios_1_3_desordenada[i-1][0]}
            <input id="input_1_3_${i}" class="input_3">
            <button id="save_1_3_${i}" class="bg-secondary text-white">Guardar</button>            
        </div>
        <h1 id="hcard_1_3_${i}"></h1>
    </div>
        `
    }
    
    row.innerHTML = text + `<p class = "fs-5 bg-secondary">Fuente imágenes: Matemática 2° básico Carolina Ubilla - Vanesa Cerda. Santillana.</p>`;

    let input_1_3 = [];
    let save_1_3 = [];
    let h_card_1_3 = [];

    for (i = 1; i <= 8; i++) {
        input_1_3.push(document.getElementById('input_1_3_' + i));
        save_1_3.push(document.getElementById('save_1_3_' +  i));
        h_card_1_3.push(document.getElementById('hcard_1_3_' +  i));   
    }

    correctas = 0;

    function funcion_Alerta_1_3_1() {
        let valor=input_1_3[0].value;
        if (valor == lista_ejercicios_1_3_desordenada[0][1]) {
            console.log("Correcto");
            h_card_1_3[0].style.backgroundColor = "Lime";
            h_card_1_3[0].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[0].style.backgroundColor = "red";
            h_card_1_3[0].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_2() {
        let valor=input_1_3[1].value;
        if (valor == lista_ejercicios_1_3_desordenada[1][1]) {
            console.log("Correcto");
            h_card_1_3[1].style.backgroundColor = "Lime";
            h_card_1_3[1].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[1].style.backgroundColor = "red";
            h_card_1_3[1].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_3() {
        let valor=input_1_3[2].value;
        if (valor == lista_ejercicios_1_3_desordenada[2][1]) {
            console.log("Correcto");
            h_card_1_3[2].style.backgroundColor = "Lime";
            h_card_1_3[2].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[2].style.backgroundColor = "red";
            h_card_1_3[2].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_4() {
        let valor=input_1_3[3].value;
        if (valor == lista_ejercicios_1_3_desordenada[3][1]) {
            console.log("Correcto");
            h_card_1_3[3].style.backgroundColor = "Lime";
            h_card_1_3[3].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[3].style.backgroundColor = "red";
            h_card_1_3[3].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_5() {
        let valor=input_1_3[4].value;
        if (valor == lista_ejercicios_1_3_desordenada[4][1]) {
            console.log("Correcto");
            h_card_1_3[4].style.backgroundColor = "Lime";
            h_card_1_3[4].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[4].style.backgroundColor = "red";
            h_card_1_3[4].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_6() {
        let valor=input_1_3[5].value;
        if (valor == lista_ejercicios_1_3_desordenada[5][1]) {
            console.log("Correcto");
            h_card_1_3[5].style.backgroundColor = "Lime";
            h_card_1_3[5].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[5].style.backgroundColor = "red";
            h_card_1_3[5].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_7() {
        let valor=input_1_3[6].value;
        if (valor == lista_ejercicios_1_3_desordenada[6][1]) {
            console.log("Correcto");
            h_card_1_3[6].style.backgroundColor = "Lime";
            h_card_1_3[6].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[6].style.backgroundColor = "red";
            h_card_1_3[6].innerHTML = "Incorrecto";
        }
    }

    function funcion_Alerta_1_3_8() {
        let valor=input_1_3[7].value;
        if (valor == lista_ejercicios_1_3_desordenada[7][1]) {
            console.log("Correcto");
            h_card_1_3[7].style.backgroundColor = "Lime";
            h_card_1_3[7].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 8) {
                siguiente_modulo_4();
            }
        } else {
            h_card_1_3[7].style.backgroundColor = "red";
            h_card_1_3[7].innerHTML = "Incorrecto";
        }
    }

    save_1_3[0].addEventListener("click", funcion_Alerta_1_3_1);
    save_1_3[1].addEventListener("click", funcion_Alerta_1_3_2);
    save_1_3[2].addEventListener("click", funcion_Alerta_1_3_3);
    save_1_3[3].addEventListener("click", funcion_Alerta_1_3_4);
    save_1_3[4].addEventListener("click", funcion_Alerta_1_3_5);
    save_1_3[5].addEventListener("click", funcion_Alerta_1_3_6);
    save_1_3[6].addEventListener("click", funcion_Alerta_1_3_7);
    save_1_3[7].addEventListener("click", funcion_Alerta_1_3_8);

    function siguiente_modulo_4() {
        pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos4() class="me-auto">Siguiente</button></span> `;
        location.href="#pie_de_pagina";
    }
    
}