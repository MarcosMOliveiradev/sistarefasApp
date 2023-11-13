/*
* Olá se você esta tentando entender oque é isso, boa sorte, para te ajudar, quando criei esse codigo a ideia era utilizar o javascript para
* criar uma especiel de modal, uma pagina que só apareceria quando um botão fosse clicado, essa modal especifica tem a função de sempre que uma atividade tentar ser
* atualizada ela sera chamada, bom, isso pode até não ser o uso mais bonito do javascript, mas funciona.
*/

export async function atualizar(data, item, codigo, setor, descricao, idDocumento, qtdFolja, inicio, termino){
    const modal = document.createElement("div")
    const aviso = document.createElement("div")

    modal.className = "atualizarAtividadeModal"
    aviso.className = "atualizarAtividadeAviso"

    const novoTitulo = document.createElement("h2")
    novoTitulo.textContent = "Atualizanção de atividade"

    const divForm = document.createElement("div")
    divForm.className = "divForm"

    // Input dos data
    const divData = document.createElement("div")
    divData.className = "divItem"
    const label10= document.createElement("label")
    const input0 = document.createElement("input")
    input0.id = "input0"
    input0.type = "text"
    input0.value = await data
    label10.value = input0.id
    label10.textContent = "Data"
    divData.appendChild(label10)
    divData.appendChild(input0)

    // Input dos item
    const divItem = document.createElement("div")
    divItem.className = "divItem"
    const label1 = document.createElement("label")
    const input1 = document.createElement("input")
    input1.id = "input1"
    input1.type = "text"
    input1.value = await item
    label1.value = input1.id
    label1.textContent = "Item"
    divItem.appendChild(label1)
    divItem.appendChild(input1)

    // Input codigo da atividade
    const divCodigo = document.createElement("div")
    divCodigo.className = "divItem"
    const labael2 = document.createElement("label")
    const input2 = document.createElement("input")
    input2.id = "input2"
    input2.type = "text"
    input2.value = await codigo
    labael2.value = input2.id
    labael2.textContent = "Codigo"
    divCodigo.appendChild(labael2)
    divCodigo.appendChild(input2)

    // input setor
    const divSetor = document.createElement("div")
    divSetor.className = "divSetor"
    const labael3 = document.createElement("label")
    const input3 = document.createElement("input")
    input3.id = "input3"
    input3.type = "text"
    input3.value = await setor
    labael3.value = input3.id
    labael3.textContent = "Setor"
    divSetor.appendChild(labael3)
    divSetor.appendChild(input3)

     // input descrição
     const divDescricao = document.createElement("div")
     divDescricao.className = "divSetor"
     const labael4 = document.createElement("label")
     const input4 = document.createElement("input")
     input4.id = "input4"
     input4.type = "text"
     input4.value = await descricao
     labael4.value = input4.id
     labael4.textContent = "Descrição"
     divDescricao.appendChild(labael4)
     divDescricao.appendChild(input4)

     // input id de documento
     const dividDocumento = document.createElement("div")
     dividDocumento.className = "divSetor"
     const labael5 = document.createElement("label")
     const input5 = document.createElement("input")
     input5.id = "input5"
     input5.type = "text"
     input5.value = await idDocumento
     labael5.value = input5.id
     labael5.textContent = "Id documento"
     dividDocumento.appendChild(labael5)
     dividDocumento.appendChild(input5)

     // input quantidade de folhas
     const divqtdFolja = document.createElement("div")
     divqtdFolja.className = "divSetor"
     const labael6 = document.createElement("label")
     const input6 = document.createElement("input")
     input6.id = "input6"
     input6.type = "text"
     input6.value = await qtdFolja
     labael6.value = input6.id
     labael6.textContent = "QTD folhas"
     divqtdFolja.appendChild(labael6)
     divqtdFolja.appendChild(input6)

     // input hora de inicio
     const divinicio = document.createElement("div")
     divinicio.className = "divSetor"
     const labael7 = document.createElement("label")
     const input7 = document.createElement("input")
     input7.id = "input7"
     input7.type = "text"
     input7.value = await inicio
     labael7.value = input7.id
     labael7.textContent = "Hora inicial"
     divinicio.appendChild(labael7)
     divinicio.appendChild(input7)

     // input hora do termino
     const divtermino = document.createElement("div")
     divtermino.className = "divSetor"
     const labael8 = document.createElement("label")
     const input8 = document.createElement("input")
     input8.id = "input8"
     input8.type = "text"
     input8.value = await termino
     labael8.value = input8.id
     labael8.textContent = "Hora termino"
     divtermino.appendChild(labael8)
     divtermino.appendChild(input8)

    // camadas de div
    divForm.appendChild(divData)
    divForm.appendChild(divItem)
    divForm.appendChild(divCodigo)
    divForm.appendChild(divSetor)
    divForm.appendChild(divDescricao)
    divForm.appendChild(dividDocumento)
    divForm.appendChild(divqtdFolja)
    divForm.appendChild(divinicio)
    divForm.appendChild(divtermino)

    const btn = document.createElement('button')
    btn.textContent = "Salvar"
    btn.id = "salvarAtualização"

    const btnClose = document.createElement('button')
    btnClose.className = "closeAtividade"
    btnClose.textContent = "X"

    btnClose.addEventListener('click', () => {
        modal.className = "ModalOff"
    })


    aviso.appendChild(novoTitulo)
    aviso.appendChild(btnClose)
    aviso.appendChild(divForm)
    aviso.appendChild(btn)
    modal.appendChild(aviso)

    return modal
}