export async function responseModal(titulo, description){
    const modal = document.createElement("div")
    const aviso = document.createElement("div")

    modal.className = "Modal"
    aviso.className = "aviso"

    const novoTitulo = document.createElement("h2")
    novoTitulo.textContent = await titulo

    const novaDecription = document.createElement("p")
    novaDecription.textContent = await description

    const btn = document.createElement("button")
    btn.className = "buttonModel"

    btn.textContent = "OK"

    btn.addEventListener('click', () => {
        modal.className = "ModalOff"
    })

    aviso.appendChild(novoTitulo)
    aviso.appendChild(novaDecription)
    aviso.appendChild(btn)

    modal.appendChild(aviso)

    return modal
}