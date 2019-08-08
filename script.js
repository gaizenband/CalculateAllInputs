const init = () => {
    const inputs = document.querySelectorAll('input');
    const result = document.querySelector('span')
    const oneInput = document.querySelector('div');

    const allInputs = Array.from(inputs);
    
    result.innerHTML = 0;

    const sum = () => {
        let value = 0;

        allInputs.forEach(function(i){          

            value += +i.value;
             
            result.innerHTML = +value;
        })
    };
    
    oneInput.addEventListener('input', sum);
};

document.addEventListener('DOMContentLoaded', init);