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
