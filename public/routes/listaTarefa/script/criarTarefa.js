import { ENV_API } from "../../../env.js"
const token = localStorage.getItem('token')

function criarTarefas(){
    const criar = document.getElementById('enviar')

    criar.addEventListener('click', async () =>{
        const codigoForms = document.getElementById('codigoForms').value
        const setor = document.getElementById('setorForms').value
        const descricao = document.getElementById('descricaoForm').value

        const codigo = parseInt(codigoForms)

        if(codigo == NaN || setor == "" || descricao == "") {
            // alert("Todos os campos devem ser preenchidos")
            throw new Error("Todos os campos devem ser preenchidos")
        }
        
        try{
            let api = ENV_API
            const response = await fetch(`${api}/tasck`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({codigo, setor, descricao})
            })

            const status = await response.status
            const resposta = await response.json()
            
            if(status == 201){
                location.reload()
            }
        }catch(err){
            console.log(err)
        }
    })
}

criarTarefas()