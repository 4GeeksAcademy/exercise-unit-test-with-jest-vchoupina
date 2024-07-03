// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
    "BRL": 5.41 // real brasileño
}

function fromEuroToDollar(euro) {
    let result = euro * oneEuroIs.USD;
    return result;
}

function fromDollarToReal(dollar) {
    let euro = dollar / 1.07;
    let real = euro * 5.41;
    return real;
}

function fromRealToPound(real) {
    let euro = real / 5.41;
    let pound = euro * 0.87;
    return pound;
}

