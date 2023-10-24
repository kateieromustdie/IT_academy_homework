function enteringInside(arr, arr2) {
  let dataIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && dataIndex < arr2.length) {
      arr.splice(i, 0, arr2[dataIndex]);
      dataIndex++;
    }
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'e', 'd'];
const result = enteringInside(arr, arr2);
console.log(result); // [1, "a", 2, "b", 3, "c", 4, "e", 5]

