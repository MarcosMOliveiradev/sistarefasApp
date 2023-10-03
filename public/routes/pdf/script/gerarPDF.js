
export async function gerarPDF(){
    const token = localStorage.getItem('token')
    const [headerEncoded, payloadEncoded] = token.split('.');
    const payload = JSON.parse(atob(payloadEncoded));

    const nome = payload.nome
    const gerarPdf = document.getElementById('gerarPDF')

    gerarPdf.addEventListener('click', async () => {
        const dataPesquisa = document.getElementById('dataPesquisa').value
        const data = new Date(dataPesquisa)
        const formattedDate = `${String(data.getDate() + 1).padStart(2, "0")}-${String(
            data.getMonth() + 1
          ).padStart(2, "0")}-${data.getFullYear()}`;
    
        if(formattedDate === "NaN-NaN-NaN" || formattedDate === "") {
            alert('O campo data não pode estar vazio')
            throw new Error('Campo data está vazio!');
        }

        const relatorio = document.getElementById('relatorioPDF')

        const option = {
            margin: 1,
            filename: `${nome}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            pagebreak: { mode: ['avoid-all', 'css']},
            html2canvas:  { scale: 1 },
            jsPDF:{ unit: 'mm', format: 'a4', orientation: 'landscape' }
        }

        html2pdf().set(option).from(relatorio).save()
    })
}