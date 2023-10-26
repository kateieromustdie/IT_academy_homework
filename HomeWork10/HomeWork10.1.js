function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runPromises() {
  const promise1 = delay(getRandomNumber(1000, 5000)).then(() => 1);
  const promise2 = delay(getRandomNumber(1000, 5000)).then(() => 2);
  const promise3 = delay(getRandomNumber(1000, 5000)).then(() => 3);

  const result = await Promise.race([promise1, promise2, promise3]);
  console.log(result);
}

runPromises();
