const amountInput = document.getElementById('amount-input')
const interestRateInput = document.getElementById('interest-rate-input')
const lengthOfLoanInput = document.getElementById('length-of-loan-input')
const calculateBtn = document.getElementById('calculate-btn')
const motgageFinalResult = document.getElementById('motgage-final-result')

calculateBtn.addEventListener('click', function(e){
    calculateMortgagePayment()
})
function calculateMortgagePayment() {    
    const dineroPrestado = amountInput.value
    const tiempoHipoteca = lengthOfLoanInput.value * 12
    const interes = interestRateInput.value // Interés en bruto, sin preparar
    const interesCalculado = interes / 100 // Lo dividimos por 100
    const interesPreparado = interesCalculado / 12 // Y lo dividimos por 12 para prepararlo

    const porcentaje = interesPreparado // 0.065 / 12 = 6.5% / 12
    const porcentajeMasUno = interesPreparado + 1
    const elevado = (porcentajeMasUno ** tiempoHipoteca)
    const primerDividendo = porcentaje * elevado
    const segundoDividendo = elevado - 1
    const division = primerDividendo / segundoDividendo
    const hipoteca = dineroPrestado
    const letra = hipoteca * division

    console.log('Parte de arriba de la división: ' + primerDividendo)
    console.log('Parte de abajo de la división: ' + segundoDividendo)
    console.log('División: ' + division)
    console.log('A pagar: ' + letra)

    motgageFinalResult.textContent = letra.toFixed(2)
    
}

/*
const testArray = ['🎸', '🥁', '🎹']
let randomNumber = Math.floor( Math.random() * testArray.length )

console.log(randomNumber)
mainContent.textContent += testArray[randomNumber]

testArray.forEach(instrument => mainContent.textContent += instrument)*/

// console.log(Math.pow(3,2))
// console.log(3 ** 2)

// let numberTest = 33.65793
// console.log(numberTest.toFixed(2))
