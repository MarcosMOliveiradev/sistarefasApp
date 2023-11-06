import { ENV_API } from "../../../env.js"
import { codigo, descricao, setor } from "./lista.js"

window.onload = async function listatarefa(){
    let dados
    const token = localStorage.getItem('token')
    try{
        let api = ENV_API

        const response = await fetch(`${api}/tasck`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        dados = await response.json()
    }catch(err){
        console.log(err)
    }

    const coodigoHtml = document.getElementById('codigo')
    const setorHtml = document.getElementById('setor')
    const descricaoHtml = document.getElementById('descricao')

    codigo(dados, coodigoHtml)
    setor(dados, setorHtml)
    descricao(dados, descricaoHtml)
}