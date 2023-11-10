import { ENV_API } from "../../../env.js"
import { responseModal } from "../../../scriptModel/response.js"
import { focar } from "./focus.js"
import { incrementarUmDia } from "./formatData.js"
const token = localStorage.getItem('token')

const codigoAtividade = document.getElementById('codigoInsert')

// busca o setor e a descrição da atividade
codigoAtividade.addEventListener('keydown', async (event) => {
    if(event.keyCode === 13 || event.keyCode === 9) {
        
        if(codigoAtividade.value === ""){
            let titulo = "Campo vazio"
            let descricaoErro = 'O campo "Código Atividade" não pode estar vazio'
            const codigoErro = await responseModal(titulo, descricaoErro)
            document.body.appendChild(codigoErro)
        }

        try{
            let Api = ENV_API
            const response = await fetch(`${Api}/tasck/codigo?codigoTarefa=${codigoAtividade.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            })

            const responseAPI = await response.json()

            responseAPI.forEach((objeto) => {
                const setor = document.getElementById('setorInsert')
                const descricao = document.getElementById('descricaoInsert')

                setor.value = objeto.setor
                descricao.value = objeto.descricao

                setor.classList.add('readonly')
                descricao.classList.add('readonly')
            });

            const status = response.status()

            if(status == 201) {
                location.reload()
            }
        }catch(err){
            console.error('erro interno')
        }
    }
})

focar()
function criarAtividade(){
    const enviar = document.getElementById('criarAtividadeButton')

    enviar.addEventListener('click', async () => {
        const dataf = document.getElementById('dateInsart').value
        const indexf = document.getElementById('itemInsert').value
        const codigoTarefaf = document.getElementById('codigoInsert').value
        const idDocumento = document.getElementById('idInsert').value
        const quantidadeFolhas = document.getElementById('QTDFolhaInsert').value
        const horaInicio = document.getElementById('horaInicialInsert').value
        const horaTermino = document.getElementById('horaTerminoInsert').value

        const index = await parseInt(indexf)
        const codigoTarefa = await parseInt(codigoTarefaf)
        const data = await incrementarUmDia(dataf)

        try{
            let Api = ENV_API
            const response = await fetch(`${Api}/atividade`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({data, index, codigoTarefa, idDocumento, quantidadeFolhas, horaInicio, horaTermino})
            })

            const status = response.status

            if(status == 201) {
                const titulo = "Criado com sucesso!"
                const descricaoTarefa = "Sua atividade foi criada com sucesso"
                const sucesso = await responseModal(titulo, descricaoTarefa)
                document.body.appendChild(sucesso)
            }

            if(response.ok) {
               // alert('atividade criada')
            } else {
               // alert(response.status, response.text)
            }
        }catch(err){
            console.error(err)
        }
    })
}


criarAtividade()