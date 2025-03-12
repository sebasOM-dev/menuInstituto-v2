//import {cargarCursosBD} from '../model/cursos';
import { cargarCursosBD } from '../model/cursos.js' ;


let loadCursos = () =>{
    cargarCursosBD();
}




let loadPage = () =>{
    loadCursos();





}




document.addEventListener('DOMContentLoaded',loadPage);