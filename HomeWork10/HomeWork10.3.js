function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getNum1() {
  return delay(3000).then(() => getRandomNumber(1, 5));
}

function getNum2() {
  return delay(5000).then(() => getRandomNumber(6, 10));
}

async function sumNumbers() {
  const num1 = await getNum1();
  const num2 = await getNum2();
  const sum = num1 + num2;
  console.log(sum);
}

sumNumbers();
