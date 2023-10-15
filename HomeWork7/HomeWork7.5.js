const sorting123 = (arr) => {
    let sorting = arr.sort((a, b) => a - b);
    return sorting;    
}
console.log(sorting123([4, 60, 199, 19, 0, 19999]));

const sorting321 = (arr) => {
    let sorting = arr.sort((a, b) => b - a);
    return sorting;    
}
console.log(sorting321([4, 60, 199, 19, 0, 19999]));
