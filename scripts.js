const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao() {

    form.style.left = "35%"
    form.style.transform = "trasnlatex (-50%)"
    mascara.style.visibility = "visible"
}

function ClqueiNaMascara() {
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"

}