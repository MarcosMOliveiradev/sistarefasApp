export function focar(){
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
            event.preventDefault();
  
            const nextIndex = (index + 1) % inputs.length;
            inputs[nextIndex].focus();
          }
        });
      });
}