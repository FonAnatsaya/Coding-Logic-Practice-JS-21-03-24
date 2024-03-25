const lotateLeft = (numsArr, d) => {
  d = d % numsArr.length;
  for (let i = 1; i <= d; i++) {
    let tmp = numsArr[numsArr.length - 1];
    numsArr[numsArr.length - 1] = numsArr[0];
    for (let j = 0; j < numsArr.length - 2; j++) {
      numsArr[j] = numsArr[j + 1];
    }
    numsArr[numsArr.length - 2] = tmp;
  }
  return numsArr;
};

console.log(lotateLeft([1, 2, 3, 4, 5], 1));
console.log(lotateLeft([1, 2, 3, 4, 5], 2));
console.log(lotateLeft([1, 2, 3, 4, 5], 3));
console.log(lotateLeft([1, 2, 3, 4, 5], 4));
console.log(lotateLeft([1, 2, 3, 4, 5], 5));
console.log(lotateLeft([1, 2, 3, 4, 5], 6));
console.log(lotateLeft([1, 2, 3, 4, 5], 7));
