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

class CreatedNewActivity {
    constructor(enviar){
        this.enviar = document.getElementById(enviar)
    }

    async apiCall(data, codigo, idDoc, qtdFolha, inicio, termino){

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
        })
    }

    init(){
        if (this.enviar) {
            this.addClickEvent()
        }
        return this;
    }
}

const newActivity = new CreatedNewActivity("enviar")

newActivity.init()