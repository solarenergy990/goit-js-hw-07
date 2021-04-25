const inputRef = document.querySelector('#validation-input');
const targetLength = Number(inputRef.dataset.length);


const onInputChange = () => {
    inputRef.classList.add('invalid')
    
    if (inputRef.value.length === targetLength) {
        inputRef.classList.replace('invalid', 'valid')
    }
    else { inputRef.classList.replace('valid', 'invalid') }
    
}


inputRef.addEventListener('blur', onInputChange);