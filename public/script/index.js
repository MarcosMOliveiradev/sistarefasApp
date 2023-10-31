import { ENV_API } from '../env.js';

const buttonEnviar = document.getElementById('entrar');
const enter = document.getElementById('password')

// Executa a função de login quando a tecla Enter é pressionada.
enter.addEventListener('keydown', async (event) => {
    if(event.keyCode === 13){
        login()
    }
})

// Executa a função de login quando o botão de login é clicado
buttonEnviar.addEventListener('click', login)

async function login(){
    const matriculaF = document.getElementById('matricula').value
    const password = document.getElementById('password').value

    if(password.length < 0){
        throw new Error('senha ou login invalido')
    }

    const matricula = parseInt(matriculaF)
    try {
        const Api = ENV_API
        const response = await fetch(`${Api}/usuario/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({matricula, password})
        })

        if(response.ok) {
            const token = await response.json()
            localStorage.setItem('token', token)
            window.location.href = './routes/home/index.html'
        } else {
            alert('Loguin ou senha invalido', response.status, response.text)
          }

    } catch(err) {
        console.error('Erro ao fazer login', err)
    }
}