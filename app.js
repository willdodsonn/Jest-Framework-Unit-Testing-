// console.log('Hello World');

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3))


// module.exports = { sum };
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }