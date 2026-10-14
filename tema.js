const temaGuardado = localStorage.getItem("tema");
const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
let tema = temaGuardado || (sistemaOscuro ? "oscuro" : "claro");
 
// aplica el tema al cargar la pagina
document.documentElement.setAttribute("data-tema", tema);
 
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("boton-tema");
 
    // el texto muestra a que tema se va a cambiar
    function actualizarTexto() {
        boton.textContent = tema === "oscuro" ? "Modo claro" : "Modo oscuro";
    }
 
    actualizarTexto();
 
    // al hacer clic cambia el tema y lo guarda
    boton.addEventListener("click", function () {
        tema = tema === "oscuro" ? "claro" : "oscuro";
        document.documentElement.setAttribute("data-tema", tema);
        localStorage.setItem("tema", tema);
        actualizarTexto();
    });
});