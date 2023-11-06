export function DataAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const novoParagrafo = document.createElement("p")

        novoParagrafo.textContent = objeto.data

        return html.appendChild(novoParagrafo)
    });
}

export function ItemAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    console.log(API)
    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.index_atividade_tarefa

        return html.appendChild(paragrafo)
    })
}

export function CodigoAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.Tarefas.codigo

        return html.appendChild(paragrafo)
    })
}

export function SetorAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.Tarefas.setor

        return html.appendChild(paragrafo)
    })
}

export function DescricaoAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.Tarefas.descricao

        return html.appendChild(paragrafo)
    })
}

export function IdDocAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.id_documento
        if(objeto.id_documento == null || objeto.id_documento == "") {
            paragrafo.textContent = 0
            return html.appendChild(paragrafo)
        }

        return html.appendChild(paragrafo)
    })
}

export function QtdFolhaAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.quantidade_de_folhas
        if(objeto.quantidade_de_folhas == null || objeto.quantidade_de_folhas == "") {
            paragrafo.textContent = 0
            return html.appendChild(paragrafo)
        }

        return html.appendChild(paragrafo)
    })
}

export function HoraInicioAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.hora_inicio

        return html.appendChild(paragrafo)
    })
}

export function HoraTerminoAPI(API, html) {
    const h2 = html.querySelector("h2")

    let paragrafo = html.lastChild
    while (paragrafo && paragrafo != h2) {
        const paragrafoAnterior = paragrafo.previousSibling;
        html.removeChild(paragrafo);
        paragrafo = paragrafoAnterior
    }

    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.hora_termino

        return html.appendChild(paragrafo)
    })
}