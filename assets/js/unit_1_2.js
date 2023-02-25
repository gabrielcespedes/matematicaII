function bienvenidos() {
    text = ""
    row.innerHTML = text;
    pie_pagina.innerHTML = text;
    ejercicio_modulo2();
}

function ejercicio_modulo2() {
    text += `
    <h2 class="mt-2">Recuerda que puedes comparar números usando los símbolos >, < o =. </h2>
    `;
    for (i = 1 ; i<=3; i++) {
        text += `<div class="card mx-auto my-2" style="width: 18rem;">
        <img src="assets/imgs/t1-2-${i}.JPG" class="card-img-top">
    </div>
        `
    }
    
    text += `<h4> Completa con >, < o =.</h4>`

    let numeros = [];

    for (i = 1 ; i<=32; i++) {
        numeros.push(Math.floor(Math.random()*50));
    }
    
    console.log(numeros);
    for (i = 1 ; i<=16; i++) {
        console.log(i); 
        text += `<div class="card mx-auto my-2" style="width: 18rem;">
        <div class="card-body text-dark">
            ${numeros[i-1]} <input id="input_1_2_${i}" class="input_2"> ${numeros[32-i]}
            <button id="save_1_2_${i}" class="bg-secondary text-white d-block">Guardar</button>
        </div>
        <h1 id="hcard_1_2_${i}"></h1>
    </div>
        `
    }
    
    row.innerHTML = text + `<p class = "fs-5 bg-secondary">Fuente imágenes: Matemática 2° básico Carolina Ubilla - Vanesa Cerda. Santillana.</p>`;
    
    let input_1_2 = [];
    let save_1_2 = [];
    let h_card_1_2 = [];

    for (i = 1; i <= 16; i++) {
        input_1_2.push(document.getElementById('input_1_2_' + i));
        save_1_2.push(document.getElementById('save_1_2_' +  i));
        h_card_1_2.push(document.getElementById('hcard_1_2_' +  i));   
    }
    
    correctas = 0;

    function funcion_Alerta_1_2_1() {
        let valor=input_1_2[0].value;
        if (numeros[0] < numeros [31] && valor == "<" || numeros[0] > numeros[31] && valor == ">" || numeros[0] == numeros[31] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[0].style.backgroundColor = "Lime";
            h_card_1_2[0].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[0].style.backgroundColor = "red";
            h_card_1_2[0].innerHTML = "Incorrecto";
        }
    }
    
    function funcion_Alerta_1_2_2() {
        let valor=input_1_2[1].value;
        if (numeros[1] < numeros [30] && valor == "<" || numeros[1] > numeros[30] && valor == ">" || numeros[1] == numeros[30] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[1].style.backgroundColor = "Lime";
            h_card_1_2[1].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[1].style.backgroundColor = "red";
            h_card_1_2[1].innerHTML = "Incorrecto";
        }
        console.log(input_1_2_2.value);
    }

    function funcion_Alerta_1_2_3() {
        let valor=input_1_2[2].value;
        if (numeros[2] < numeros [29] && valor == "<" || numeros[2] > numeros[29] && valor == ">" || numeros[2] == numeros[29] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[2].style.backgroundColor = "Lime";
            h_card_1_2[2].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[2].style.backgroundColor = "red";
            h_card_1_2[2].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[2].value);
    }

    function funcion_Alerta_1_2_4() {
        let valor=input_1_2[3].value;
        if (numeros[3] < numeros [28] && valor == "<" || numeros[3] > numeros[28] && valor == ">" || numeros[3] == numeros[28] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[3].style.backgroundColor = "Lime";
            h_card_1_2[3].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[3].style.backgroundColor = "red";
            h_card_1_2[3].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[3].value);
    }

    function funcion_Alerta_1_2_5() {
        let valor=input_1_2[4].value;
        if (numeros[4] < numeros [27] && valor == "<" || numeros[4] > numeros[27] && valor == ">" || numeros[4] == numeros[27] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[4].style.backgroundColor = "Lime";
            h_card_1_2[4].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[4].style.backgroundColor = "red";
            h_card_1_2[4].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[4].value);
    }

    function funcion_Alerta_1_2_6() {
        let valor=input_1_2[5].value;
        if (numeros[5] < numeros [26] && valor == "<" || numeros[5] > numeros[26] && valor == ">" || numeros[5] == numeros[26] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[5].style.backgroundColor = "Lime";
            h_card_1_2[5].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[5].style.backgroundColor = "red";
            h_card_1_2[5].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[5].value);
    }

    function funcion_Alerta_1_2_7() {
        let valor=input_1_2[6].value;
        if (numeros[6] < numeros [25] && valor == "<" || numeros[6] > numeros[25] && valor == ">" || numeros[6] == numeros[25] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[6].style.backgroundColor = "Lime";
            h_card_1_2[6].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[6].style.backgroundColor = "red";
            h_card_1_2[6].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[6].value);
    }

    function funcion_Alerta_1_2_8() {
        let valor=input_1_2[7].value;
        if (numeros[7] < numeros [24] && valor == "<" || numeros[7] > numeros[24] && valor == ">" || numeros[7] == numeros[24] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[7].style.backgroundColor = "Lime";
            h_card_1_2[7].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[7].style.backgroundColor = "red";
            h_card_1_2[7].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[7].value);
    }

    function funcion_Alerta_1_2_9() {
        let valor=input_1_2[8].value;
        if (numeros[8] < numeros [23] && valor == "<" || numeros[8] > numeros[23] && valor == ">" || numeros[8] == numeros[23] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[8].style.backgroundColor = "Lime";
            h_card_1_2[8].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[8].style.backgroundColor = "red";
            h_card_1_2[8].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[8].value);
    }

    function funcion_Alerta_1_2_10() {
        let valor=input_1_2[9].value;
        if (numeros[9] < numeros [22] && valor == "<" || numeros[9] > numeros[22] && valor == ">" || numeros[9] == numeros[22] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[9].style.backgroundColor = "Lime";
            h_card_1_2[9].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[9].style.backgroundColor = "red";
            h_card_1_2[9].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[9].value);
    }

    function funcion_Alerta_1_2_11() {
        let valor=input_1_2[10].value;
        if (numeros[10] < numeros [21] && valor == "<" || numeros[10] > numeros[21] && valor == ">" || numeros[10] == numeros[21] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[10].style.backgroundColor = "Lime";
            h_card_1_2[10].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[10].style.backgroundColor = "red";
            h_card_1_2[10].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[10].value);
    }

    function funcion_Alerta_1_2_12() {
        let valor=input_1_2[11].value;
        if (numeros[11] < numeros [20] && valor == "<" || numeros[11] > numeros[20] && valor == ">" || numeros[11] == numeros[20] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[11].style.backgroundColor = "Lime";
            h_card_1_2[11].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[11].style.backgroundColor = "red";
            h_card_1_2[11].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[11].value);
    }

    function funcion_Alerta_1_2_13() {
        let valor=input_1_2[12].value;
        if (numeros[12] < numeros [19] && valor == "<" || numeros[12] > numeros[19] && valor == ">" || numeros[12] == numeros[19] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[12].style.backgroundColor = "Lime";
            h_card_1_2[12].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[12].style.backgroundColor = "red";
            h_card_1_2[12].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[12].value);
    }

    function funcion_Alerta_1_2_14() {
        let valor=input_1_2[13].value;
        if (numeros[13] < numeros [18] && valor == "<" || numeros[13] > numeros[18] && valor == ">" || numeros[13] == numeros[18] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[13].style.backgroundColor = "Lime";
            h_card_1_2[13].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[13].style.backgroundColor = "red";
            h_card_1_2[13].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[13].value);
    }

    function funcion_Alerta_1_2_15() {
        let valor=input_1_2[14].value;
        if (numeros[14] < numeros [17] && valor == "<" || numeros[14] > numeros[17] && valor == ">" || numeros[14] == numeros[17] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[14].style.backgroundColor = "Lime";
            h_card_1_2[14].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[14].style.backgroundColor = "red";
            h_card_1_2[14].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[14].value);
    }

    function funcion_Alerta_1_2_16() {
        let valor=input_1_2[15].value;
        if (numeros[15] < numeros [16] && valor == "<" || numeros[15] > numeros[16] && valor == ">" || numeros[15] == numeros[16] && valor == "=") {
            console.log("Correcto");
            h_card_1_2[15].style.backgroundColor = "Lime";
            h_card_1_2[15].innerHTML = "CORRECTO!";
            correctas++;
            if (correctas == 16) {
                siguiente_modulo_3();
            }
        } else {
            h_card_1_2[15].style.backgroundColor = "red";
            h_card_1_2[15].innerHTML = "Incorrecto";
        }
        console.log(input_1_2[15].value);
    }

    function siguiente_modulo_3() {
        pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos3() class="me-auto">Siguiente</button></span> `;
        location.href="#pie_de_pagina";
    }

    save_1_2[0].addEventListener("click", funcion_Alerta_1_2_1);
    save_1_2[1].addEventListener("click", funcion_Alerta_1_2_2);
    save_1_2[2].addEventListener("click", funcion_Alerta_1_2_3);
    save_1_2[3].addEventListener("click", funcion_Alerta_1_2_4);
    save_1_2[4].addEventListener("click", funcion_Alerta_1_2_5);
    save_1_2[5].addEventListener("click", funcion_Alerta_1_2_6);
    save_1_2[6].addEventListener("click", funcion_Alerta_1_2_7);
    save_1_2[7].addEventListener("click", funcion_Alerta_1_2_8);
    save_1_2[8].addEventListener("click", funcion_Alerta_1_2_9);
    save_1_2[9].addEventListener("click", funcion_Alerta_1_2_10);
    save_1_2[10].addEventListener("click", funcion_Alerta_1_2_11);
    save_1_2[11].addEventListener("click", funcion_Alerta_1_2_12);
    save_1_2[12].addEventListener("click", funcion_Alerta_1_2_13);
    save_1_2[13].addEventListener("click", funcion_Alerta_1_2_14);
    save_1_2[14].addEventListener("click", funcion_Alerta_1_2_15);
    save_1_2[15].addEventListener("click", funcion_Alerta_1_2_16);
    
    MathJax.typeset();
} 