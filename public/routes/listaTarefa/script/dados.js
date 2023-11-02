import { ENV_API } from "../../../env.js"

window.onload = async function listatarefa(){
    const token = localStorage.getItem('token')
    try{
        let api = ENV_API

        const response = await fetch(`${api}/tasck`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        console.log(response.json())
    }catch(err){
        console.log(err)
    }

    // TODO: criar botão para criação de tarefas, personalizar para que o botão so seja visivel para adm
}