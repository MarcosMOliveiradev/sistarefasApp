const close = document.getElementById('close');

// Finaliza a sessão
close.addEventListener('click', async () => {
    await localStorage.removeItem('token')
    window.location.href = '../../../index.html'
})

// pega o token
const token = localStorage.getItem('token')
if(token == null) {
    alert('Você não esta altenticado para essa rota!')
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

    create.addEventListener('click', async () => {
        if(payload.permission == true) {
            window.location.href = '../createUser/create-user.html'
        }
    })
}

createUser()

function relatorioDiario() {
    const relatorioDiario = document.getElementById('diario')

    relatorioDiario.addEventListener('click', () => {
        window.location.href = '../index.html'
    })
}

relatorioDiario()