const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))




// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    //convertimos el valor a YEN
    let valueInYen = valueInDollar * 106.5833 
  
    return valueInYen
}

const fromYenToPound = function (valueInYen){
    //convertimos el valor a pound
    let valueInPound = valueInYen * 0.00625;
    

    return valueInPound
}
console.log(fromYenToPound(3.5))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }