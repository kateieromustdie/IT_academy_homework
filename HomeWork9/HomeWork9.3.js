const averageMath = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    };
    let average = sum / arr.length;
    return average;
}
let array1 = [12, 15, 20, 25, 59, 79]; // [12, 15, 20, 25, 59, 79] - expected 35
console.log(averageMath(array1));
