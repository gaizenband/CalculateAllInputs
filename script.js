const init = () => {
    const inputs = document.querySelectorAll('input');
    const result = document.querySelector('span')
    const oneInput = document.querySelector('div');

    const allInputs = Array.from(inputs);
    
    result.innerHTML = 0;

    const sum = () => {
        const newArray = [];

        allInputs.forEach(function(i){          
            newArray.push(+i.value);

            let value = newArray.reduce((acc, cur) => acc + cur);

            result.innerHTML = +value;
        })
    };
    
    oneInput.addEventListener('input', sum);
};

document.addEventListener('DOMContentLoaded', init);