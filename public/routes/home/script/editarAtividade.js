import { ENV_API } from "../../../env.js";
import { atualizar } from "../../../scriptModel/atualizarAtividade.js";
import { responseModal } from "../../../scriptModel/response.js";
import { focar } from "./focus.js";

export async function editarAtividade(){
    const token = localStorage.getItem('token')
    const botao = document.querySelectorAll('button')

    botao.forEach((button, index) => {
        button.addEventListener('click', async () => {
            const nextIndex = (index) % botao.length;
            const id = botao[nextIndex].value

            try {
                let api = ENV_API
                const response = await fetch(`${api}/atividade/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
                const atividade = await response.json()
                const data = await atividade.data
                const item = await atividade.index_atividade_tarefa
                const codigo = await atividade.Tarefas.codigo
                const setor = await atividade.Tarefas.setor
                const descricao = await atividade.Tarefas.descricao
                const idDocumento = await atividade.id_documento
                const qtdFolha = await atividade.quantidade_de_folhas
                const inicio = await atividade.hora_inicio
                const termino = await atividade.hora_termino

                const atualizarAtividade = await atualizar(data, item, codigo, setor, descricao, idDocumento, qtdFolha, inicio, termino)
                document.body.appendChild(atualizarAtividade)

                focar()

                async function atualizarAtividadeAPI(){
                    const salvarAtualizacao = await document.getElementById('salvarAtualização')
                    
                    salvarAtualizacao.addEventListener('click', async () => {
                        const data = document.getElementById('input0').value
                        const codigoForms = document.getElementById('input2').value
                        const idDocumento = document.getElementById('input5').value
                        const quantidadeFolhas = document.getElementById('input6').value
                        const horaInicio = document.getElementById('input7').value
                        const horaTermino = document.getElementById('input8').value

                        let codigoTarefa = undefined

                        if (codigoForms !== '') {
                            codigoTarefa = await parseInt(codigoForms)
                        }

                        try{

                            let api = ENV_API
                            const responseTest = await fetch(`${api}/atividade/put/${id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${token}`
                                },
                                body: JSON.stringify({data, index, codigoTarefa, idDocumento, quantidadeFolhas, horaInicio, horaTermino})
                            })
                
                            // const status = responseTest.status()
                            const status = response.status
                
                            if(status == 201){
                                const titulo = "Atividade atualizada"
                                const descricao = "Parabéns sua atividade foi atualizada com sucesso"
                                const sucesso = await responseModal(titulo, descricao)
                                document.body.appendChild(sucesso)
                                const ok = await document.getElementById('ok')

                                ok.addEventListener('click', () => {
                                    location.reload()
                                })
                            }
                        }catch(err){
                            console.error(err)
                        }
                    })
                }
                atualizarAtividadeAPI()
            } catch(err){
                console.error(err)
            }

            const codigoAtualizarAtividade = document.getElementById("input2")
                
                codigoAtualizarAtividade.addEventListener('keydown', async (e) => {
                    if(e.keyCode === 13 || e.keyCode === 9) {
                        try{
                            let api = ENV_API
                            const response = await fetch(`${api}/tasck/codigo?codigoTarefa=${codigoAtualizarAtividade.value}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${token}`
                                }
                            })

                            const responseAPI = await response.json()
                            responseAPI.forEach((objeto) => {
                                const setorAtualizar = document.getElementById("input3")
                                const descricaoAtualizar = document.getElementById("input4")
                
                                setorAtualizar.value = objeto.setor
                                descricaoAtualizar.value = objeto.descricao
                
                                setorAtualizar.classList.add('readonly')
                                descricaoAtualizar.classList.add('readonly')
                            });
                        }catch(err){
                            console.log(err)
                        }
                    }
                })
        });
      });
}