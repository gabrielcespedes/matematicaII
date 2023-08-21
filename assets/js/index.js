// function filter_modulos() {
//     let input_name = document.getElementById('name_input');
//     let pass_input = document.getElementById('pass_input');    
//     variable_name = input_name.value;
//     variable_pass = pass_input.value;
//     if (variable_name === "gabriel" && variable_pass === "password") {        
//         render_list();
//     } else if (variable_name === "maximiliano" && variable_pass === "maximiliano2023") {
//         render_list2();
//     }
// }

render_list();

function render_list() {
    let lista = document.getElementById('lista');
    lista.innerHTML = `<li class="text-light fs-3"><a target="_blank" href="primero_segundo.html">1°Básico - 2°Básico. Matemática 📝</a></li>
    <li class="text-light fs-3"><a target="_blank" href="tercero_medio_dispersion.html">3° Medio. Recuerdo Medidas de Tendencia Central: Promedio. Matemática 📝</a></li>
    <li class="text-light fs-3"><a target="_blank" href="tercero_medio_dispersion_2.html">3° Medio. Medidas de Dispersión. Matemática 📝</a></li>`   
}

// function render_list2() {
//     let lista = document.getElementById('lista');
//     lista.innerHTML = `
//     <li class="text-light fs-3"><a target="_blank" href="tercero_medio_dispersion.html">3° Medio. Recuerdo Medidas de Tendencia Central: Promedio. Matemática 📝</a></li>
//     <li class="text-light fs-3"><a target="_blank" href="tercero_medio_dispersion_2.html">3° Medio. Medidas de Dispersión. Matemática 📝</a></li>`   
// }

