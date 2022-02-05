const amountInput = document.getElementById('amount-input')
const interestRateInput = document.getElementById('interest-rate-input')
const lengthOfLoanInput = document.getElementById('length-of-loan-input')
const calculateBtn = document.getElementById('calculate-btn')
const resetBtn = document.getElementById('reset-btn')
const mortgageFinalResult = document.getElementById('mortgage-final-result')

const errorMessage = 'There is an error in the form, please check it! 😥'
const successMessage = '🧮 Your monthly mortgage payment will be: '

amountInput.addEventListener('focusout',function(e){
    if (!amountInput.validity.valid) {
      amountInput.classList.add('error')
    } else {
        amountInput.classList.remove('error');
    }
})
interestRateInput.addEventListener('focusout',function(e){
    if (!interestRateInput.validity.valid) {
        interestRateInput.classList.add('error')
    } else {
        interestRateInput.classList.remove('error');
    }
})
lengthOfLoanInput.addEventListener('focusout',function(e){
    if (!lengthOfLoanInput.validity.valid) {
        lengthOfLoanInput.classList.add('error')
    } else {
        lengthOfLoanInput.classList.remove('error');
    }
})

calculateBtn.addEventListener('click', function(e){
    if (amountInput.validity.valid && interestRateInput.validity.valid && lengthOfLoanInput.validity.valid) {
        calculateMortgagePayment()
    } else {
        mortgageFinalResult.textContent = errorMessage
        mortgageFinalResult.classList.add('error-message')
        calculateBtn.classList.add('form-error')
        if (!amountInput.validity.valid) {
            amountInput.classList.add('error')
        }
        if (!interestRateInput.validity.valid) {
            interestRateInput.classList.add('error')
        }
        if (!lengthOfLoanInput.validity.valid) {
            lengthOfLoanInput.classList.add('error')
        }
    }
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

    mortgageFinalResult.textContent = successMessage + letra.toFixed(2)
    mortgageFinalResult.classList.add('success-message')
    calculateBtn.classList.add('form-success')
    calculateBtn.setAttribute('disabled','disabled')
    resetBtn.style.display = 'block'
}

resetBtn.addEventListener('click', function() {
    resetBtn.style.display = 'none'
    mortgageFinalResult.textContent = ''
    calculateBtn.removeAttribute('disabled')
    calculateBtn.classList.remove('form-success')
})
