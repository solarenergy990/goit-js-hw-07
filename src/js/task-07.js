const fontSizeControlRef = document.querySelector('#font-size-control');
const targetText = document.querySelector('#text')


const onInputChange = () => {
    let textSize = fontSizeControlRef.value;
    targetText.style.fontSize = textSize + 'px';
};



fontSizeControlRef.addEventListener('input', onInputChange);