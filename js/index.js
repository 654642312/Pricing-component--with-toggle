const switchInput = document.getElementById('switch');

switchInput.addEventListener('change', e => {
    let element = document.querySelectorAll('.card');
    if(switchInput.checked){
        for(let i = 0; i < element.length; i++){
            element[i].className += ' show-monthly';
        }
        return element;
    }
    for(let i = 0; i < element.length; i++){
        element[i].classList.remove('show-monthly');
    }
});

