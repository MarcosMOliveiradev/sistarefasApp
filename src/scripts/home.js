class relatorioNav{
    constructor(relatorioList, listaRelatorio, listButton, buttonList, seta1, seta2){
        this.relatorioList = document.querySelector(relatorioList)
        this.listaRelatorio = document.querySelector(listaRelatorio)
        this.buttonList = document.querySelector(listButton)
        this.list = document.querySelector(buttonList)
        this.arrow = document.querySelector(seta1)
        this.arrow2 = document.querySelector(seta2)
    }

    handleClick(){
        this.relatorioList.classList.toggle('relatorio')
        this.listaRelatorio.classList.toggle('close')
        this.arrow.classList.toggle('click')
    }

    addClickEvent(){
        this.relatorioList.addEventListener("click", () => {
        this.handleClick()
        })
    }

    addClickEventButton(){
        this.buttonList.addEventListener("click", () => {
            this.list.classList.toggle('close')
            this.arrow2.classList.toggle('click')
        })
    }

    init(){
        if ( this.relatorioList ){
            this.addClickEvent()
        }
        return this;
    }

    button() {
        if (this.buttonList){
            this.addClickEventButton()
        }
        return this;
    }
}


const navBar = new relatorioNav(".relatorioList", ".listaRelatorio", ".listButton", ".buttonList", ".seta1", ".seta2")

navBar.init()
navBar.button()

const link = document.querySelectorAll('a')

link.forEach((e) => {
    e.addEventListener('click', () => {
        if ( e.id === "relatorioDiario" ) {
            window.location.href = './relatorioDiario.html'
        }
    })
})

