//import {cargarCursosBD} from '../model/cursos';
import { cargarCursosBD } from '../model/cursos.js';
import { cargarTablaHorarios } from '../model/cursos.js';


let loadCursos = () =>{
    
    let cursos = cargarCursosBD();
    let selectCursos = document.getElementById('slctCursos');
    
    for (const curso of cursos) {
        selectCursos.innerHTML += `<option>${curso}</option>`;
    }

}




let loadPage = () =>{
    let selectCursos = document.getElementById('slctCursos');
    
    loadCursos();


    selectCursos.addEventListener('change',(evento) =>{
        alert(selectCursos.selectedIndex);
    });




}




document.addEventListener('DOMContentLoaded',loadPage);