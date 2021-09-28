var legOneInput = document.querySelector('#leg-number-1')
var legTwoInput = document.querySelector('#leg-number-2')
var findHypotenuse = document.querySelector('#findHypotenuse')
var result = document.querySelector('#result')
var resultText = document.querySelector('#resultText')

function calculateHypotenuse() {

    if (!legOneInput.value || !legTwoInput.value) {
        resultText.textContent ="No fields can be left empty!"
        return
    }

    legOne = parseFloat(legOneInput.value)
    legTwo = parseFloat(legTwoInput.value)

    if ((legOne === 0) || (legTwo === 0)) {
        resultText.textContent ="No side can be be 0!"
        return
    }

    var hypotenuse = (Math.sqrt(legOne ** 2 + legTwo ** 2)).toFixed(3)

    resultText.textContent = 'Hypotenuse: ' + hypotenuse
}

findHypotenuse.addEventListener('click', calculateHypotenuse)