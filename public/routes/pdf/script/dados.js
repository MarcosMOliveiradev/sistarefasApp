import { ENV_API } from '../../../env.js';
import { gerarPDF } from './gerarPDF.js'
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
    } from './Data.js';
import { responseModal } from '../../../scriptModel/response.js';

const pesquisar = document.getElementById('pesquisar')

const token = localStorage.getItem('token')
if(token == null) {
    const titulo = "Eu não te conheço"
    const description = "Você não esta autenticado para utilizar essa pagina, favor faça login."

    const semToken = await responseModal(titulo, description)
    document.body.appendChild(semToken)
    window.location.href = '../../index.html'
}

pesquisar.addEventListener('click', async () => {
    const dataPesquisa = document.getElementById('dataPesquisa').value
    const filter = document.getElementById('filtro').value

    const data = new Date(dataPesquisa)

    data.setDate(data.getDate() + 1)
    if (data.getDate() === 1) {
    data.setMonth(data.getMonth());
    }

    const formattedDate = `${String(data.getDate()).padStart(2, "0")}-${String(
        data.getMonth() + 1
      ).padStart(2, "0")}-${data.getFullYear()}`;

      console.log(formattedDate)

    if(formattedDate === "NaN/NaN/NaN" || formattedDate === "") {
       // alert('O campo data não pode estar vazio')
        throw new Error('Campo data está vazio!');
    }

    const token = localStorage.getItem('token')

    if(filter === "Diário") {
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
    }

    if(filter === "Mensal") {
        try {
            let Api = ENV_API
            const response = await fetch(`${Api}/atividade/intervalData?dataIntervalo=${formattedDate}`, {
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
    }
})

// função do pdf

gerarPDF();

function sairDoPdf() {
    const sair = document.getElementById('sair')

    sair.addEventListener('click', () => {
        window.location.href = '../home/index.html'
    })
}

sairDoPdf()