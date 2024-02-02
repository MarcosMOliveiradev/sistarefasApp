import { ENV_API } from "./utils/env.js"
import { focar } from "./utils/focus.js"
import { incrementarUmDia } from "./utils/formatData.js"

class modal {
    constructor(fechar, cadastro, newActivy, criarAtividade){
        this.criarAtividade = document.querySelector(criarAtividade)
        this.newActivity = document.querySelector(newActivy)
        this.cadastro = document.querySelector(cadastro)
        this.fechar = document.querySelector(fechar)
    }

    handleClick(){
        this.newActivity.classList.toggle('a')
        this.newActivity.classList.toggle('close')
        this.cadastro.classList.toggle('close')
    }

    addClickEvent(){
        this.criarAtividade.addEventListener("click", () => {
        this.handleClick()
        })

        this.fechar.addEventListener("click", () => {
            this.handleClick()
        })

    }

    init(){
        if ( this.criarAtividade || this.fechar){
            this.addClickEvent()
        }
        return this;
    }
}
const modalNewActivy = new modal(".fechar", ".cadastro", ".newActivy", ".criarAtividade")

modalNewActivy.init()
focar()
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiTWFyY29zIE1vbnRlaXJvICIsIm1hdHJpY3VsYSI6OTg0LCJwZXJtaXNzaW9uIjp0cnVlLCJ1c2VyQXZhdGEiOiJodHRwOi8vbG9jYWxob3N0OjMzMzMvdXBsb2FkL2Q5OGU5MjlkLTE2MGUtNDJhNi1hY2M2LTQ0OTEwZGRkNDRhNy5qcGciLCJzdWIiOiI4N2I0NTVkOC1hNjU2LTQzOGMtYjQyMy00Yjg2Zjk3NjNiNWMiLCJpYXQiOjE3MDY4NzI4MTksImV4cCI6MTcwNjk1OTIxOX0.rRBImY0jGQQwZT2AQeQWVY-2vDXUBwzQqMR5KyT1BrY'

class CreatedNewActivity {
    constructor(enviar){
        this.enviar = document.getElementById(enviar)
        this.codigo = document.getElementById('codigoInp')
    }

    async getCode(){
        this.codigo.addEventListener('keydown', async (event) => {
            if(event.keyCode === 13 || event.keyCode === 9) {
                const teste = parseInt(this.codigo.value)
                try{
                    let Api = ENV_API
                    const response = await fetch(`${Api}/tasck/codigo?codigoTarefa=${teste}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    })
        
                    const responseAPI = await response.json()
        
                    responseAPI.forEach((objeto) => {
                        const setor = document.getElementById('setor')
                        const descricao = document.getElementById('descricao')

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
    }

    async apiCall(data, codigoTarefa, idDocumento, quantidadeFolhas, horaInicio, horaTermino){
        const api = ENV_API
        try{
            const response = await fetch(`${api}/atividade`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({data, codigoTarefa, idDocumento, quantidadeFolhas, horaInicio, horaTermino})
            })

            alert(response.status)
        }catch(err){
            console.error(err)
            throw err
        }

    }

    addClickEvent(){
        this.enviar.addEventListener("click", async () => {
            const inputData = document.getElementById('data').value
            const codigo = document.getElementById('codigoInp').value
            const idDoc = document.getElementById('IdDoc').value
            const qtdFolha = document.getElementById('qtdFolha').value
            const inicio = document.getElementById('inicio').value
            const termino = document.getElementById('termino').value

            const data = incrementarUmDia(inputData)
            const codigoTarefa = parseInt(codigo)

            await this.apiCall(data, codigoTarefa, idDoc, qtdFolha, inicio, termino)
        })
    }

    init(){
        if (this.enviar) {
            this.addClickEvent()
        }
        if (this.codigo) {
            this.getCode()
        }
        return this;
    }
}

const newActivity = new CreatedNewActivity("enviar")

newActivity.init()