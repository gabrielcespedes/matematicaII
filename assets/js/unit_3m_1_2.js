function bienvenidos3m_1_2() {
    text = ""
    row.innerHTML = text;
    pie_pagina.innerHTML = text;    
    ejercicio_modulo3m_1_2();
}

function ejercicio_modulo3m_1_2() {
    let altura = (Math.random()*0.5 + 1.5).toFixed(2);

    let num_jugadores = 2*Math.floor(Math.random()*2+3) - 1;

    let num_restas = (num_jugadores - 1)/2;

    let correcta = Number((altura - 0.02*num_restas).toFixed(2));

    text += `
    <div class="card m-auto" style="width: 36rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">El promedio de estatura de ${num_jugadores} jugadores de un equipo de básquetbol es igual a la estatura del jugador de la imagen.
            Al ordenarlos del más alto al más bajo, cada uno mide 2 cm menos que el anterior. ¿Cuánto mide el más bajo? (Deje la respuesta en metros, use <strong>.</strong> como separador decimal).</h5>
            <div class="d-flex justify-content-center align-items-center">        
            <img class = "image" src="assets/imgs/t_3m_1_1.JPG">
            <p class="text-dark">${altura} m</p>
            </div>
            <input id="input_3m_1_2" class="input_2">
            <button id="save_3m_1_2" class="bg-secondary text-white">Guardar</button>                    
        </div>
        <h1 id="hcard_3m_1_2"></h1>
        <div id="p_retro_3m_1_2" class="text-dark"></div>        
    </div>
    `

    row.innerHTML = text + `<p class = "fs-5 bg-secondary">Fuente imágenes: Matemática 2° básico Carolina Ubilla - Vanesa Cerda. Santillana.</p>`;

    console.log(altura);
    console.log(num_jugadores);
    console.log(correcta);

    let correctas = 0;

    function funcion_Alerta_3m_1_2() {
        let valor= document.getElementById('input_3m_1_2').value;
        if (Number(valor) == correcta) {
            document.getElementById('hcard_3m_1_2').style.backgroundColor = "Lime";
            document.getElementById('hcard_3m_1_2').innerHTML = "CORRECTO!";
            document.getElementById('p_retro_3m_1_2').innerHTML = '';
            correctas++;
        } else {
            document.getElementById('hcard_3m_1_2').style.backgroundColor = "red";
            document.getElementById('hcard_3m_1_2').innerHTML = "Incorrecto";
            document.getElementById('p_retro_3m_1_2').innerHTML = "<p><strong>Ayuda:</strong> Puedes, por ejemplo, usar <strong>x</strong> como incógnita representando la altura del menor deportista, y formar la ecuación que corresponda al promedio de alturas. Para cada jugador, se debe sumar <strong>0.02</strong>  consecutivamente.</p><p>También se puede considerar que para este caso, la <strong>Mediana</strong> coincide con el <strong>Promedio</strong> (número impar de datos, y van aumentando en la misma tasa, por lo que el promedio será el valor central). Por lo que sólo se necesita restar 0.02 consecutivamente.</p>";
        }
        if (correctas == 1) {
            siguiente_modulo_3m_1_3();
        }        
    }

    function siguiente_modulo_3m_1_3() {
        pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos3m_1_3() class="me-auto">Siguiente</button></span> `;
        location.href="#pie_de_pagina";
    }

    save_3m_1_2.addEventListener("click", funcion_Alerta_3m_1_2);
}

