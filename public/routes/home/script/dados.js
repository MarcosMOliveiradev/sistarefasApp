const pesquisar = document.getElementById('pesquisar')

pesquisar.addEventListener('click', async () => {
    const dataPesquisa = document.getElementById('dataPesquisa').value
    const data = new Date(dataPesquisa)
    const formattedDate = `${String(data.getDate() + 1).padStart(2, "0")}/${String(
        data.getMonth() + 1
      ).padStart(2, "0")}/${data.getFullYear()}`;

    console.log(formattedDate)
    if(formattedDate === "") {
        alert('O campo data não pode estar vazio')
        throw new Error('Campo data está vazio!');
    }

    const token = localStorage.getItem('token')
    if(token == null) {
        alert('Você não esta altenticado para essa rota!')
        window.location.href = '../../index.html'
    }
    try {
        const response = await fetch(`http://localhost:3333/atividade/data?data=${formattedDate}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(response.json())
    } catch(err) {
        console.error('Error', err)
    }
})