const sumComparing = (sixNumbers) => {
    let stringSixNumbers = sixNumbers.toString();
    let sumFirst = parseInt(stringSixNumbers[0]) + parseInt(stringSixNumbers[1]) + parseInt(stringSixNumbers[2]);
    //console.log(sumFirst);
    let sumSecond = parseInt(stringSixNumbers[3]) + parseInt(stringSixNumbers[4]) + parseInt(stringSixNumbers[5]);
    //console.log(sumSecond);
    if(sumFirst === sumSecond){
        console.log('Да');
    } else {
        console.log('Нет');
    }
};
sumComparing(111111); // да
sumComparing(111999); // нет
sumComparing(456951); // да
