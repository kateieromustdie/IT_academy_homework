const deleteCopies = (array) => {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(deleteCopies([1, 1, 1, 2, 3, 1, 3, 4]));
