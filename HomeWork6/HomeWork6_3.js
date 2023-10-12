function splitNumber(num, qty) {
    let arr = [];
    let sum = 0;
    for(i = 0; i < qty-1; i++){
        let random = Math.round(Math.random() * num);
        arr[i] = random;
        sum += random;
}
     arr[i++] = num - sum;
     return arr;
}
console.log(splitNumber(17, 4));
