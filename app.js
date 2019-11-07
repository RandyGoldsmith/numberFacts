let numFact = document.querySelector('#numFact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numInput');
numberInput.addEventListener('input', getFact);


function getFact() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(data => {
        if(number != '') {
            numFact.style.display = 'block';
            factText.innerText = data;
        }
    })
    .catch(error => console.error(error))
}