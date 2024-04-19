const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function MostrarFormCel() {
    form.style.left = "10%"
    form.style.transform = "trasnlatex (-50%)"
    mascara.style.visibility = "visible"

}

function MostrarForm() {

    form.style.left = "35%"
    form.style.transform = "trasnlatex (-50%)"
    mascara.style.visibility = "visible"
}

function EsconderForm() {
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"

}