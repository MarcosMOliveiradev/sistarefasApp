const buttonEnviar = document.getElementById('entrar');

buttonEnviar.addEventListener('click', async () => {
    const matriculaF = document.getElementById('matricula').value
    const password = document.getElementById('password').value

    if(password.length < 0){
        throw new Error('senha ou login invalido')
    }

    const matricula = parseInt(matriculaF)
    try {
        const response = await fetch('http://192.168.0.64:3333/usuario/', {
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
})