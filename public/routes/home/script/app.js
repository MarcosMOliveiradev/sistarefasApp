const close = document.getElementById('close');

// Finaliza a sessão
close.addEventListener('click', async () => {
    await localStorage.removeItem('token')
    window.location.href = '../../index.html'
})

// pega o token
const token = localStorage.getItem('token')
if(token == null) {
    //alert('Você não esta altenticado para essa rota!')
    window.location.href = '../../index.html'
}
// decodifica o token
const [headerEncoded, payloadEncoded] = token.split('.');
const payload = JSON.parse(atob(payloadEncoded));

// pega os elementos correspondente a nome e matricula
const nome = document.getElementById('nome')
const matriculaU = document.getElementById('mat')

// seta nome e matricula nos elementos correspondentes
nome.innerHTML = payload.nome
matriculaU.innerHTML = payload.matricula


// Leva para a pagina de criar usuario
function createUser(){
    const create = document.getElementById('criarUser')
    
    create.addEventListener('click', () => {
        if(payload.permission == true) {
            window.location.href = '../createUser/create-user.html'
        }
    })
}

function relatorioMes() {
    const relatorioMensal = document.getElementById('mensal')

    relatorioMensal.addEventListener('click', () => {
        window.location.href = './relatorioMes/index.html'
    })
}

function openModal(){
    const opeModal = document.getElementById('novaAtividade')

    opeModal.addEventListener('click', () => {
        const modal = document.getElementById('criarAtividade')

        modal.classList.remove('close')
    })
}

function closeModal(){
    const closeModal = document.getElementById('closeModal')
    closeModal.addEventListener('click', () => {
        const closeModal = document.getElementById('criarAtividade')

        
        closeModal.classList.add('close')
    })
}

function relatorioPDF(){
    const relatorioPdf = document.getElementById('geratPdf')

    relatorioPdf.addEventListener('click', () => {
        window.location.href = '../pdf/index.html'
    })
}

function listaCodigo(){
    const listaCodigo = document.getElementById('listaCodigo')

    listaCodigo.addEventListener('click', () => {
        window.location.href = '../listaTarefa/index.html'
    })
}

listaCodigo()
relatorioPDF()
closeModal()
openModal()
createUser()
relatorioMes()