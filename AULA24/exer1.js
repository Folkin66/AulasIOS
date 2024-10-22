let alt = parseFloat(prompt('Digite sua altura em metros:'))
let peso = parseFloat(prompt('Digite seu peso em quilogramas:'))

function calcIMC(peso = 0.0, alt = 0.0) {
    let imc = peso / (alt*alt)

    if (imc < 16.9) {
        alert(`Você está muito abaixo do peso ${imc.toFixed(2)} `)
    } else if (imc <= 18.4) {
        alert(`Você está abaixo do peso ${imc.toFixed(2)} `)
    }
     else if (imc <= 24.9) {
        alert(`Você está no peso normal ${imc.toFixed(2)} `)
    }
     else if (imc <= 29.9) {
        alert(`Você está acima do peso ${imc.toFixed(2)} `)
    }
     else if (imc <= 34.9) {
        alert(`Você está com obesidade grau I ${imc.toFixed(2)} `)
    }
     else if (imc <= 40) {
        alert(`Você está com obesidade grau II ${imc.toFixed(2)} `)
    } else {
        alert(`Você está com obesidade grau III ${imc.toFixed(2)}`)
    }
}

calcIMC(peso, alt)