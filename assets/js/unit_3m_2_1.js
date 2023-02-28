
let edad = [];
    for (i=1; i<=10; i++){
        edad.push(Math.floor(Math.random()*40 + 20));
    }

let peso = [];
    for (i=1; i<=10; i++){
        peso.push(Math.floor(Math.random()*40 + 60));
    }

let altura = [];
    for (i=1; i<=10; i++){
        altura.push((Math.random()*0.4 + 1.5).toFixed(2));
    }

let nombres_variables = ['Edad [cm]', 'Peso [kg]', 'Altura [m]']

let data = [edad, peso, altura]

let text = `
<div class="container">
<h2 class = "mt-3">Medidas de dispersión.</h2>
    <div class="card m-auto" style="width: 36rem;">
        <div class="card-body text-dark">
            <p class="card-title">Las medidas de dispersión sirven para determinar si los datos de una variable son similares al promedio de ésta o si tienen valores muy distintos entre sí. Las medidas de dispersión más conocidas son el <strong>Rango</strong>, la <strong>Desviación Media</strong>, la <strong>varianza</strong>, la <strong>desviación estándar</strong> y el <strong>coeficiente de variación.</strong> </p>
            <p>El <strong>Rango</strong> corresponde a la resta entre el mayor valor de los datos de una variable y el menor valor de éstos. \\[ \\mbox{rango} = \\mbox{Max} - \\mbox{Min} \\] </p>
        </div>        
    </div>
</div>
<h2 class="mt-3">Calcule el <strong> Rango</strong> para cada variable.</h2>
<div id="contenedor_fila" class="row">            
</div>
`;

row = document.getElementById('contenedor_fila');
pie_pagina = document.getElementById('pie_de_pagina');

string_table = '';

let correctas_3m_2_1 = [];

for (i=1; i<=3; i++) {
    correctas_3m_2_1.push(Math.max(...data[i-1]) - Math.min(...data[i-1]))
}

for (i=1; i<=3; i++) {
    string_table += `<p class="text-center">${nombres_variables[i-1]}</p>`         
    for (j=1; j<=10; j++) {
        string_table += `<td class="text-center">${data[i-1][j-1]} </td>`
    }
    text += `<div class="card mx-auto my-3" style="width: 45rem;">
    <div class="card-body text-dark d-inline">
        <table class = "table table-bordered">
            ${string_table}        
        </table>
        <input id="input_3m_2_${i}" class="input_2">
        <button id="save_3m_2_${i}" class="bg-secondary text-white">Guardar</button>
    </div>
    <h1 id="hcard_3m_2_${i}"></h1>
    </div>
    `
    string_table = '';  
}

row.innerHTML = text;

let input_3m_2 = []
let save_3m_2 = []
let h_card_3m_2 = []

for (i=1; i<=3; i++) {
    input_3m_2.push(document.getElementById('input_3m_2_'+i));
    save_3m_2.push(document.getElementById('save_3m_2_'+i));
    h_card_3m_2.push(document.getElementById('hcard_3m_2_'+i));
}

correctas = 0;

function funcion_Alerta_3m_2_1() {
    let valor=input_3m_2[0].value;
    if (valor == correctas_3m_2_1[0]) {
        h_card_3m_2[0].style.backgroundColor = "Lime";
        h_card_3m_2[0].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_2[0].style.backgroundColor = "red";
        h_card_3m_2[0].innerHTML = "Incorrecto";
    }
    if (correctas == 3) {
        alert("siguiente modulo");
    }
}

function funcion_Alerta_3m_2_2() {
    let valor=input_3m_2[1].value;
    if (valor == correctas_3m_2_1[1]) {
        h_card_3m_2[1].style.backgroundColor = "Lime";
        h_card_3m_2[1].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_2[1].style.backgroundColor = "red";
        h_card_3m_2[1].innerHTML = "Incorrecto";
    }
    if (correctas == 3) {
        alert("siguiente modulo");
    }
}

function funcion_Alerta_3m_2_3() {
    let valor=input_3m_2[2].value;
    if (Number(valor) == Number((correctas_3m_2_1[2]).toFixed(2))) {
        h_card_3m_2[2].style.backgroundColor = "Lime";
        h_card_3m_2[2].innerHTML = "CORRECTO!";
        correctas++;
    } else {
        h_card_3m_2[2].style.backgroundColor = "red";
        h_card_3m_2[2].innerHTML = "Incorrecto";
    }
    if (correctas == 3) {
        siguiente_modulo_3m_2_2();
    }
}

function siguiente_modulo_3m_2_2() {
    pie_pagina.innerHTML = `FELICITACIONES!!! <span><button onclick = bienvenidos3m_2_2() class="me-auto">Siguiente</button></span> `;
    location.href="#pie_de_pagina";
}

save_3m_2[0].addEventListener("click", funcion_Alerta_3m_2_1);
save_3m_2[1].addEventListener("click", funcion_Alerta_3m_2_2);
save_3m_2[2].addEventListener("click", funcion_Alerta_3m_2_3);
