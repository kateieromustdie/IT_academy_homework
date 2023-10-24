const qtyIterationsToLess50 = (n) => {
    let num = 0;
    while(n >= 50){
        n = n/2;
        num++;
    }
        return {number: n, iterations: num}; 
};
console.log(qtyIterationsToLess50(2010)); // expected { number: 31.40625, iterations: 6 }
