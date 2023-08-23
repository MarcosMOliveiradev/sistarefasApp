const close = document.getElementById('close');

close.addEventListener('click', async () => {
    await localStorage.removeItem('token')
    window.location.href = '../../index.html'
})