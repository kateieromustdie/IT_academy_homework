let findBiggest = (arr) => {
    let big = Math.max(...arr);
    return big;
};
let numbers = [1, 6, 9898, 67, 0];
let biggest = findBiggest(numbers);
console.log(biggest);
