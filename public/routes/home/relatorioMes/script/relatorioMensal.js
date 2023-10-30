import { ENV_API } from '../../../../env.js'
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
    } from '../../script/Data.js'

import { incrementarUmDia } from './formatData.js'

const pesquisar = document.getElementById('pesquisar')

pesquisar.addEventListener('click', async () => {
    const dataInicial = document.getElementById('dataInicial').value
    
    const dataI = new Date(dataInicial)

    const formattedDateInicial = incrementarUmDia(dataI)

    if(formattedDateInicial === "NaN/NaN/NaN" || formattedDateInicial === "") {
        alert('O campo data não pode estar vazio')
        throw new Error('Campo data está vazio!');
    }

    const token = localStorage.getItem('token')
    if(token == null) {
        alert('Você não esta altenticado para essa rota!')
        window.location.href = '../../index.html'
    }
    try {
        let Api = ENV_API
        const response = await fetch(`${Api}/atividade/intervalData?dataIntervalo=${formattedDateInicial}`, {
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