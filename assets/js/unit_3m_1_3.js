

function bienvenidos3m_1_3() {
    text = ""
    row.innerHTML = text;
    pie_pagina.innerHTML = text;
    ejercicio_modulo3m_1_3();
}

function ejercicio_modulo3m_1_3() {
    let numero_inicio = Math.floor(Math.random()*20 + 50);
    let lista_numeros_3m_1_3 = [];

    let num_inicial_sumar = numero_inicio;
    for (i = 1; i<=6; i++) {
        lista_numeros_3m_1_3.push(num_inicial_sumar);
        num_inicial_sumar += 6;
    }

    let numeros_frecuencia = [];
    for (i=1; i<=5; i++){
        numeros_frecuencia.push(Math.floor(Math.random()*7 + 5));
    }

    let correcta_3m_1_3 = Number(Math.round(((lista_numeros_3m_1_3[0]+3)*numeros_frecuencia[0] + (lista_numeros_3m_1_3[1]+3)*numeros_frecuencia[1] + (lista_numeros_3m_1_3[2]+3)*numeros_frecuencia[2] + (lista_numeros_3m_1_3[3]+3)*numeros_frecuencia[3] + (lista_numeros_3m_1_3[4]+3)*numeros_frecuencia[4])/(numeros_frecuencia[0] + numeros_frecuencia[1] + numeros_frecuencia[2] + numeros_frecuencia[3] + numeros_frecuencia[4]))); 
    
    string_table = '';

    for (i=1; i<=5; i++) {
        string_table += `<tr><td>[${lista_numeros_3m_1_3[i-1]}, ${lista_numeros_3m_1_3[i]}[</td><td>${numeros_frecuencia[i-1]}</td></tr>`
    }

    text += `<div class="card m-auto" style="width: 36rem;">
        <div class="card-body text-dark">
        <h5 class="card-title">Calcula el promedio para los datos organizados en la siguiente tabla. Redondee al entero.</h5>
        <table class = "table table-bordered">
            <tr>Masa corporal de estudiantes de 3° medio</tr>
            <tr><td>Masa corporal (kg)</td> <td>Frecuencia</td></tr>
            ${string_table}
        </table>
        <input id="input_3m_1_3" class="input_2">
        <button id="save_3m_1_3" class="bg-secondary text-white">Guardar</button>
        </div>
        <h1 id="hcard_3m_1_3"></h1>
        <div id="p_retro_3m_1_3" class="text-dark"></div> 
    </div>
    `

    row.innerHTML = text;

    console.log(lista_numeros_3m_1_3);

    console.log(correcta_3m_1_3);

    let correctas = 0;

    function funcion_Alerta_3m_1_3() {
        let valor= document.getElementById('input_3m_1_3').value;
        if (Number(valor) == correcta_3m_1_3) {
            document.getElementById('hcard_3m_1_3').style.backgroundColor = "Lime";
            document.getElementById('hcard_3m_1_3').innerHTML = "CORRECTO!";
            document.getElementById('p_retro_3m_1_3').innerHTML = '';
            correctas++;
        } else {
            document.getElementById('hcard_3m_1_3').style.backgroundColor = "red";
            document.getElementById('hcard_3m_1_3').innerHTML = "Incorrecto";
            document.getElementById('p_retro_3m_1_3').innerHTML = `<p><strong>Ayuda:</strong> Para datos agrupados en una tabla de frecuencia, el cálculo del promedio se realiza con la <strong>Marca de Clase</strong> de cada intervalo. (La marca de clase es un valor representante para el intervalo, corresponde al promedio entre el mínimo y el máximo valor del intervalo). El cálculo se realiza con la siguiente fórmula: \\[ \\bar{x} = \\dfrac{x_{c1} \\cdot f_1 + x_{c2} \\cdot f_2 + \\dots + x_{cn} \\cdot f_n}{f_1 + f_2 + \\dots f_n}   \\]
            <p>Donde \\(x_{c1}, \\; x_{c2}  , \\; \\dots , \\; x_{cn} \\; \\) son las marcas de clase de cada uno de los \\( n \\) intervalos.</p>
            <p>\\(f_1, \\; f_2, \\; \\dots, x_{cn} \\; \\) son las frecuencias de cada intervalo.</p>
            <p>Por ejemplo, para este ejercicio, se tiene \\( x_{c1} = \\; \\)${lista_numeros_3m_1_3[0]+3}, \\( f_1 = \\; \\) ${numeros_frecuencia[0]}, etc.</p>`;
            MathJax.typeset();
        }
        if (correctas == 1) {
            siguiente_modulo_3m_1_4();
        }        
    }

    function siguiente_modulo_3m_1_4() {
        pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos3m_1_4() class="me-auto">Siguiente</button></span> `;
        location.href="#pie_de_pagina";
    }

    save_3m_1_3.addEventListener("click", funcion_Alerta_3m_1_3);
    
    
}
