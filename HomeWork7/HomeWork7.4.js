const compareNumbers = (num1, num2) => {
    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString()
    let samePositionValue = 0;
    for(let i = 0; i < 4; i++){
        if(stringNum1[i] === stringNum2[i]) {
            samePositionValue++
        }
    return samePositionValue;
    };
    let sameValue = 0;
    for(let i = 0; i < 4; i++){
        if(stringNum1.includes(stringNum2[i])) {
            sameValue++
    }
    return sameValue;
    
}

compareNumbers(4588, 2508);
