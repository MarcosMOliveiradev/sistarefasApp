const close = document.getElementById('close');

close.addEventListener('click', async () => {
    localStorage.removeItem('token')
    window.location.href = '../../index.html'
})