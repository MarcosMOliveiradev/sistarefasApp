const enviar = document.getElementById('submit')

enviar.addEventListener('click', async () => {
    const nome = await document.getElementById('nomeForm').value
    const matriculaF = document.getElementById('matricula').value
    const password = document.getElementById('senha').value
    const confSenha = document.getElementById('confSenha').value
    let permissionForm = document.getElementById('permission').value
    
    const matricula = await parseInt(matriculaF)
    if(nome === '' || matricula === '' || password === '' || confSenha  === '' || permissionForm === '')  {
        alert('Preencha todos os camposo')
        throw new Error('Preencha todos os campos')
    }

    if(password != confSenha){
        alert('Senha e Confirmar senha precisam ser iguais')
    }

    let permission = await permissionForm === 'true' ? true : false

    try {
        const response = await fetch('http://localhost:3333/usuario/created', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome, matricula, password, permission})
        })

        if(response.ok) {
            alert('Usuario Criando')
            window.location.href = '../home/index.html'
        } else {
            alert('Loguin ou senha invalido', response.status, response.text)
          }

    } catch(err) {
        alert('Algo deu errado', err)
        console.error('Erro ao fazer login', err)
    }
})

const home = document.getElementById('home')

home.addEventListener('click', () => {
    window.location.href = '../home/index.html'
})