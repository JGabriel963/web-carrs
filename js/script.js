const botaoTrailer = document.querySelector(".botao")
const video = document.getElementById("video");
const modal = document.querySelector(".modal")
const fechar = document.querySelector(".fechar-modal")
const linkDoVideo = video.src

function alternarModal() {
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)   
})

fechar.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", "")
})