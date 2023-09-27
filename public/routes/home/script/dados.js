import {
    DataAPI,
    CodigoAPI,
    ItemAPI,
    SetorAPI,
    DescricaoAPI,
    IdDocAPI,
    QtdFolhaAPI,
    HoraInicioAPI,
    HoraTerminoAPI 
    } from './Data.js'

const pesquisar = document.getElementById('pesquisar')

pesquisar.addEventListener('click', async () => {
    const dataPesquisa = document.getElementById('dataPesquisa').value
    const data = new Date(dataPesquisa)
    const formattedDate = `${String(data.getDate() + 1).padStart(2, "0")}-${String(
        data.getMonth() + 1
      ).padStart(2, "0")}-${data.getFullYear()}`;

    if(formattedDate === "NaN/NaN/NaN" || formattedDate === "") {
        alert('O campo data não pode estar vazio')
        throw new Error('Campo data está vazio!');
    }

    const token = localStorage.getItem('token')
    if(token == null) {
        alert('Você não esta altenticado para essa rota!')
        window.location.href = '../../index.html'
    }
    try {
        const response = await fetch(`http://192.168.0.64:3333/atividade/data?data=${formattedDate}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const API = await response.json()

        let dataHtml = document.getElementById('data')
        let itemHtml = document.getElementById('item')
        let codigoHtml = document.getElementById('codigo')
        let setorHtml = document.getElementById('setor')
        let descricaoHtml = document.getElementById('descricao')
        let idDocumentoHtml = document.getElementById('idDocumento')
        let qtdFoljaHtml = document.getElementById('qtdFolja')
        let inicioHtml = document.getElementById('inicio')
        let terminoHtml = document.getElementById('termino')

        DataAPI(API, dataHtml)
        CodigoAPI(API, codigoHtml)
        ItemAPI(API, itemHtml)
        SetorAPI(API, setorHtml)
        DescricaoAPI(API, descricaoHtml)
        IdDocAPI(API, idDocumentoHtml)
        QtdFolhaAPI(API, qtdFoljaHtml)
        HoraInicioAPI(API, inicioHtml)
        HoraTerminoAPI(API, terminoHtml)

    } catch(err) {
        console.error('Error', err)
    }
})