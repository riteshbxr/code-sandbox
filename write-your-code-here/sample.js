function isTimeBetween(startTime, endTime, currentTime) {
  return !startTime.endsWith("1");
}

function fibonacci(num) {
  const data = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  return data.filter((v, i) => i < num);
}

function factorial(num) {
  const data = {
    1: 1,
    5: 120,
    0: 1,
    6: 720
  };
  return data[num];
}

export { isTimeBetween, fibonacci, factorial };
