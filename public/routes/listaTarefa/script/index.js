function sair(){
    const sair = document.getElementById('close')

    sair.addEventListener('click', () => {
        window.localStorage.removeItem('token')
        window.location.href = '../../index.html'
    })
}
sair()

const token = localStorage.getItem('token')
if(token == null) {
    //('Você não esta altenticado para essa rota!')
    window.location.href = '../../index.html'
}

const [headerEncoded, payloadEncoded] = token.split('.');
const payload = JSON.parse(atob(payloadEncoded));

const nome = document.getElementById('nome')
const matriculaU = document.getElementById('mat')

nome.innerHTML = payload.nome
matriculaU.innerHTML = payload.matricula

function relatorioDiario() {
    const relatorioDiario = document.getElementById('diario')
    relatorioDiario.addEventListener('click', () => {
        window.location.href = '../home/index.html'
    })
}

relatorioDiario()

function relatorioMensal() {
    const relatorioMensal = document.getElementById('mensal')
    relatorioMensal.addEventListener('click', () => {
        window.location.href = '../home/relatorioMes/index.html'
    })
}

relatorioMensal()

function openModal(){
    const criarTarefa = document.getElementById('criarTarefa')

    criarTarefa.addEventListener('click', () => {
        const model = document.getElementById('criarTarefaForms')

        model.classList.remove('close')
    })
}

openModal()

function closeModal(){
    const close = document.getElementById('buttonClose')

    close.addEventListener('click', () => {
        const model = document.getElementById('criarTarefaForms')

        model.classList.add('close')
    })
}

closeModal()