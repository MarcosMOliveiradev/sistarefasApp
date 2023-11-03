export function codigo(dado, html){
    const h2 = html.querySelector('h2')

    let paragrafo = html.lastChild

    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    dado.forEach((objeto) => {
        const paragrafo = document.createElement('p')

        paragrafo.textContent = objeto.codigo

        return html.appendChild(paragrafo)
    })
}

export function setor(dado, html){
    const h2 = html.querySelector('h2')

    let paragrafo = html.lastChild

    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    dado.forEach((objeto) => {
        const paragrafo = document.createElement('p')

        paragrafo.textContent = objeto.setor

        return html.appendChild(paragrafo)
    })
}

export function descricao(dado, html){
    const h2 = html.querySelector('h2')

    let paragrafo = html.lastChild

    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    dado.forEach((objeto) => {
        const paragrafo = document.createElement('p')

        paragrafo.textContent = objeto.descricao

        return html.appendChild(paragrafo)
    })
}