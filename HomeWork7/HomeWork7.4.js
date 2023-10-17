const compareNumbers = (num1, num2) => { // что-то не работает тут всё равно
    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString()
    let samePositionValue = 0;
    for(i = 0; i < 4; i++){
        if(stringNum1[i] === stringNum2[i]) {
            samePositionValue++
        }
    };
    let sameValue = 0;
    for(i = 0; i < 4; i++){
        if(stringNum2.includes(stringNum2[i])) {
            sameValue++
    }
}
