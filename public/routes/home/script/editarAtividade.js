export function editarAtividade(){
    const botao = document.querySelectorAll('button')

    botao.forEach((button, index) => {
        button.addEventListener('click', () => {
            const nextIndex = (index) % botao.length;
            console.log(botao[nextIndex])
        });
      });
}