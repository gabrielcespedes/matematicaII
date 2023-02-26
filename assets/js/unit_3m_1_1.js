let numeros = [];
for (i=1; i<=10; i++){
    numeros.push(Math.floor(Math.random()*35 + 10));
}

let text = `
<h2 class = "mt-3">Repaso Estadística</h2>
<div class="container">
    <div class="card m-auto" style="width: 18rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">Recuerda que dentro de las medidas de tendencia central, está el promedio, que consiste en la suma de todos los valores de una variable dividido por la cantidad de datos.</h5>
        </div>        
    </div>
</div>
<h2 class="mt-3">Calcule el promedio para cada caso.</h2>
<div id="contenedor_fila" class="row">            
</div>
`;

row = document.getElementById('contenedor_fila');

let string_table='';

for (i=1; i<=10; i++) {
    string_table += `<td>${numeros[i-1]}</td>`
}

for (i = 1; i<=1; i++) {
    text += `<div class="card mx-auto my-3" style="width: 18rem;">
    <div class="card-body text-dark d-inline">
        <table>
        <tr>
            ${string_table}
        </tr>
        </table>
        <input id="input_3m_1_1">
        <button id="save_3m_1_1" class="bg-secondary text-white">Guardar</button>
    </div>
    <h1 id="hcard_3m_1_1"></h1>
    </div>
    `
}



row.innerHTML = text;