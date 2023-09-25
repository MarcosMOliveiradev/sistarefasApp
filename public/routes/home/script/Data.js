export function DataAPI(API, html) {
    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.data

        return html.appendChild(paragrafo)
    });
}

export function CodigoAPI(API, html) {
    API.forEach((objeto) => {
        const paragrafo = document.createElement("p")

        paragrafo.textContent = objeto.Tarefas.codigo

        return html.appendChild(paragrafo)
    })
}