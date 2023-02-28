function bienvenidos3m_2_2() {
    text = ""
    row.innerHTML = text;
    pie_pagina.innerHTML = text;    
    ejercicio_modulo3m_2_2();
}

function ejercicio_modulo3m_2_2() {

    let num1 = Math.floor(Math.random()*10 + 60);
    let num2 = Math.floor(Math.random()*10 + 47); 
    let num3 = Math.floor(Math.random()*10 + 27);
    let num4 = Math.floor(Math.random()*10 + 43);
    let num5 = Math.floor(Math.random()*10 + 35);

    let promedio = (num1 + num2+ num3 + num4 + num5)/5;

    let suma_desviaciones = Math.abs(num1 - promedio) + Math.abs(num2 - promedio) + Math.abs(num3 - promedio) + Math.abs(num4 - promedio) + Math.abs(num5 - promedio);

    let correcta_3m_2_2 = Math.round(suma_desviaciones / 5);

    text += `
    <div class="container">
    <h2 class = "mt-3">Medidas de dispersión.</h2>
        <div class="card m-auto" style="width: 45rem;">
            <div class="card-body text-dark">
                <p class="card-title">La <strong>desviación</strong> del dato de una variable con respecto al promedio de la variable, está dada por  \\( |x_i - \\bar{x}|  \\).</p>
                <p>La <strong>Desviación Media</strong> (D. M.) corresponde a la media aritmética (promedio) de las <strong>desviaciones</strong> de los \\( n \\) datos de una variable.</p>
                <p>Para datos no agrupados se tiene: \\[ \\mbox{Desviación Media} = \\dfrac{|x_1 - \\bar{x}| + |x_2-\\bar{x}| + \\dots + |x_n - \\bar{x}|}{n} \\]</p> 
                <p>Para datos agrupados se tiene: \\[ \\mbox{D. M.} = \\dfrac{|x_{c1} - \\bar{x}|\\cdot f_1 + |x_{c2}-\\bar{x}| \\cdot f_2 + \\dots + |x_{cn} - \\bar{x} | \\cdot f_n}  {f_1 + f_2 + \\dots f_n}  \\]</p>
            </div>        
        </div>
    </div>
    <div id="contenedor_fila" class="row">            
    </div>
    `;
    
    text += `
    <h2 class = "mt-3">Resuelva el siguiente problema.</h2>
    <div class="card m-auto" style="width: 36rem;">
        <div class="card-body text-dark">
            <p class="card-title">Tú y tus amigos acaban de medir la altura de sus perros (en centímetros). Las alturas son ${num1} cm, ${num2} cm , ${num3} cm, ${num4} cm y ${num5} cm. Calcule la desviación media (en cm) de la altura de los perros. (Redondee la respuesta al entero).</p>            
            <input id="input_3m_2_2_1" class="input_2">
            <button id="save_3m_2_2_1" class="bg-secondary text-white">Guardar</button>                    
        </div>
        <h1 id="hcard_3m_2_2_1"></h1>
        <div id="p_retro_3m_2_2_1" class="text-dark"></div>        
    </div>
    `

    row.innerHTML = text;
    MathJax.typeset();

    console.log(correcta_3m_2_2);

    let input_3m_2_2_1 = document.getElementById('input_3m_2_2_1');
    let save_3m_2_2_1 = document.getElementById('save_3m_2_2_1');
    let h_card_3m_2_2_1 = document.getElementById('hcard_3m_2_2_1');
    let p_retro_3m_2_2_1 = document.getElementById('p_retro_3m_2_2_1'); 

    correctas = 0;

    function funcion_Alerta_3m_2_2_1() {
        let valor=input_3m_2_2_1.value;
        if (valor == correcta_3m_2_2) {
            h_card_3m_2_2_1.style.backgroundColor = "Lime";
            h_card_3m_2_2_1.innerHTML = "CORRECTO!";
            p_retro_3m_2_2_1.innerHTML = '';
            correctas++;
        } else {
            h_card_3m_2_2_1.style.backgroundColor = "red";
            h_card_3m_2_2_1.innerHTML = "Incorrecto";
            p_retro_3m_2_2_1.innerHTML = `<p>Para hacer el cálculo puedes ayudarte completando con una tabla como la siguiente:</p>
            <table class="table table-bordered text-center">
                <tr><th>\\(x_i\\)</th><th>\\( |x_i - \\bar{x} | \\)</th></tr>
                <tr><td>${num1}</td><td>|${num1} - \\( \\bar{x} \\)|</td></tr>
                <tr><td>${num2}</td><td>|${num2} - \\( \\bar{x} \\)|</td></tr>
                <tr><td>${num3}</td><td>|${num3} - \\( \\bar{x} \\)|</td></tr>
                <tr><td>${num4}</td><td>|${num4} - \\( \\bar{x} \\)|</td></tr>
                <tr><td>${num5}</td><td>|${num5} - \\( \\bar{x} \\)|</td></tr>
                <tr><th>\\( \\bar{x} \\)</th><th>\\( D. M. \\)</th></tr>
                <tr><th>${promedio.toFixed(2)}</th><th>?</th> </tr>
            </table)`
            MathJax.typeset();            
        }
        if (correctas == 1) {
            siguiente_modulo_3m_2_3();
        }
    }
    
    function siguiente_modulo_3m_2_3() {
        pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos3m_2_3() class="me-auto">Siguiente</button></span> `;
        location.href="#pie_de_pagina";
    }

    save_3m_2_2_1.addEventListener("click", funcion_Alerta_3m_2_2_1);

    
}