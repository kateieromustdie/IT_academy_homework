function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getNum() {
  return delay(3000).then(() => getRandomNumber(1, 5));
}

async function squareNum() {
  const num = await getNum();
  const squaredNum = num ** 2;
  console.log(squaredNum);
}

squareNum(); //
