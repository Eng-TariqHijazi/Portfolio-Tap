// task 2 in 

function findMissingNumber(num) {
  const n = num.length;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = num.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

const num1 = [3, 0, 1];
console.log(findMissingNumber(num1));

const num2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(num2));

const num3 = [0, 1];
console.log(findMissingNumber(num3));
