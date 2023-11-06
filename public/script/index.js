import { ENV_API } from '../env.js';
import { responseModal } from '../scriptModel/response.js';

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

    if(matriculaF == "" && password == ""){
        const titulo = "Preencha todos os campos"
        const description = "Matricula e senha precisam estar preenchidas"

        const matriculaESenhaVazios = await responseModal(titulo, description)

        document.body.appendChild(matriculaESenhaVazios)
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
            // alert('Loguin ou senha invalido', response.status, response.text)
            if(response.status === 409) {
                console.log("chegou")
                const titulo = "Erro ao logar"
                const description = "Loguin ou senha invalido"
                const modal = await responseModal(titulo, description)
                document.body.appendChild(modal)
            }
            
          }

    } catch(err) {
        const titulo = "Internal Server Error"
        const internalErr = await responseModal(titulo, err)
        document.body.appendChild(internalErr)
        console.error('Erro ao fazer login', err)
    }
}