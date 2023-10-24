const enteringInside = (arr, n, arr2) => {
  arr.splice(n, 0, ...arr2);
  return arr;
}

let array1 = [1, 2, 3, 4, 5];
let newData = ['a', 'b', 'c'];
console.log(enteringInside(array1, 3, newData)); // 1,   2,   3, 'a', 'b', 'c', 4, 5
