import { ENV_API } from "../../../env.js"
import { responseModal } from "../../../scriptModel/response.js"

const enviar = document.getElementById('submit')
const token = localStorage.getItem('token')

enviar.addEventListener('click', async () => {
    const nome = await document.getElementById('nomeForm').value
    const matriculaF = document.getElementById('matricula').value
    const password = document.getElementById('senha').value
    const confSenha = document.getElementById('confSenha').value
    let permissionForm = document.getElementById('permission').value

    const verifica = password.split("")

    if (verifica.length < 6 ) {
        // Cria modal de erro
        const titulo = "Senha invalida"
        const description = "A senha precisa ter mais de 6 caracteres"
        const modal = await responseModal(titulo, description)
        document.body.appendChild(modal)
        throw new Error("A senha precisa ter mais de 6 caracteres")
    }
    
    const matricula = await parseInt(matriculaF)
    if(nome === '' || matricula === '' || password === '' || confSenha  === '' || permissionForm === '')  {
        //alert('Preencha todos os camposo')
        throw new Error('Preencha todos os campos')
    }

    if(password != confSenha){
        //alert('Senha e Confirmar senha precisam ser iguais')
        const titulo = "Senha incorreta"
        const description = "As senhas precisam estar iguais"
        const differentPassowrd = await responseModal(titulo, description)
        document.body.appendChild(differentPassowrd)
        throw new Error('as senhas devem ser iguais')
    }

    let permission = await permissionForm === 'true' ? true : false

    try {
        let Api = ENV_API
        const response = await fetch(`${Api}/usuario/created`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({nome, matricula, password, permission})
        })

        if(response.ok) {
            //alert('Usuario Criando')
            window.location.href = '../home/index.html'
        } else {
           // alert('Loguin ou senha invalido', response.status, response.text)
          }

    } catch(err) {
        //alert('Algo deu errado', err)
        console.error('Erro ao fazer login', err)
    }
})

const home = document.getElementById('home')

home.addEventListener('click', () => {
    window.location.href = '../home/index.html'
})


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