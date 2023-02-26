function bienvenidos3m_1_2() {
    text = ""
    row.innerHTML = text;
    pie_pagina.innerHTML = text;
    alert("bienvenido modulo2")
    ejercicio_modulo3m_1_2();
}

function ejercicio_modulo3m_1_2() {
    let altura = (Math.random()*0.5 + 1.5).toFixed(2);

    let num_jugadores = 2*Math.floor(Math.random()*2+3) - 1;

    let num_restas = (num_jugadores - 1)/2;

    let correcta = (altura - 0.02*num_restas).toFixed(2);

    text += `<div class="container">
    <div class="card m-auto" style="width: 18rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">El promedio de estatura de ${num_jugadores} jugadores de un equipo de básquetbol es igual a la estatura del jugador de la imagen.
            Al ordenarlos del más alto al más bajo, cada uno mide 2 cm menos que el anterior. ¿Cuánto mide el más bajo? (Deje la respuesta en metros).</h5>
        </div>
        <div>        
            <img src="assets/imgs/t_3m_1_1.JPG" class="card-img-top">
            <p>${altura} m</p>
        </div>
        <input id="input_3m_1_2">
        <button id="save_3m_1_2" class="bg-secondary text-white">Guardar</button>
        <h1 id="hcard_3m_1_2"></h1>
    </div>
    </div>`

    row.innerHTML = text;

    console.log(altura);
    console.log(num_jugadores);
    console.log(correcta);

    let correctas = 0;

    function funcion_Alerta_3m_1_2() {
        let valor= document.getElementById('input_3m_1_2').value;
        if (valor == correcta) {
            document.getElementById('hcard_3m_1_2').style.backgroundColor = "Lime";
            document.getElementById('hcard_3m_1_2').innerHTML = "CORRECTO!";
            correctas++;
        } else {
            document.getElementById('hcard_3m_1_2').style.backgroundColor = "red";
            document.getElementById('hcard_3m_1_2').innerHTML = "Incorrecto";
        }        
    }

    save_3m_1_2.addEventListener("click", funcion_Alerta_3m_1_2);
}

