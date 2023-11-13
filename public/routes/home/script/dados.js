import { ENV_API } from '../../../env.js';
import { seDataVazia } from './seDataVazia.js'

import {
    DataAPI,
    CodigoAPI,
    ItemAPI,
    SetorAPI,
    DescricaoAPI,
    IdDocAPI,
    QtdFolhaAPI,
    HoraInicioAPI,
    HoraTerminoAPI, 
    editarFormulario
    } from './Data.js';
import { editarAtividade } from './editarAtividade.js';

const pesquisar = document.getElementById('pesquisar')

await seDataVazia()

pesquisar.addEventListener('click', async () => {
    const dataPesquisa = document.getElementById('dataPesquisa').value
    const data = new Date(dataPesquisa)
    
    data.setDate(data.getDate() + 1)
    if (data.getDate() === 1) {
    data.setMonth(data.getMonth());
    }

    const formattedDate = `${String(data.getDate()).padStart(2, "0")}-${String(
        data.getMonth() + 1
      ).padStart(2, "0")}-${data.getFullYear()}`;

    if(formattedDate === "NaN/NaN/NaN" || formattedDate === "" || formattedDate === "NaN-NaN-NaN") {
        //alert('O campo data não pode estar vazio')
        throw new Error('Campo data está vazio!');
    }

    const token = localStorage.getItem('token')
    if(token == null) {
        window.location.href = '../../index.html'
    }
  
    try {
        let Api = ENV_API
        const response = await fetch(`${Api}/atividade/data?data=${formattedDate}`, {
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
        let editarImg = document.getElementById('editar')

        DataAPI(API, dataHtml)
        CodigoAPI(API, codigoHtml)
        ItemAPI(API, itemHtml)
        SetorAPI(API, setorHtml)
        DescricaoAPI(API, descricaoHtml)
        IdDocAPI(API, idDocumentoHtml)
        QtdFolhaAPI(API, qtdFoljaHtml)
        HoraInicioAPI(API, inicioHtml)
        HoraTerminoAPI(API, terminoHtml)
        editarFormulario(API, editarImg)

        editarAtividade()
        
    } catch(err) {
        console.error('Error', err)
    }
})