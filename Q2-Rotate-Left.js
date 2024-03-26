//method1
const rotateLeft = (numsArr, d) => {
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

// console.log(rotateLeft([1, 2, 3, 4, 5], 1));
// console.log(rotateLeft([1, 2, 3, 4, 5], 2));
// console.log(rotateLeft([1, 2, 3, 4, 5], 3));
// console.log(rotateLeft([1, 2, 3, 4, 5], 4));
// console.log(rotateLeft([1, 2, 3, 4, 5], 5));
// console.log(rotateLeft([1, 2, 3, 4, 5], 6));
// console.log(rotateLeft([1, 2, 3, 4, 5], 7));

//method2

const rotateLeft__2 = (nums, d) => {
  d = d % nums.length;
  for (let i = 1; i <= d; i++) {
    let tmp = nums[0];
    for (let j = 0; j < nums.length - 1; j++) {
      nums[j] = nums[j + 1];
    }
    nums[nums.length - 1] = tmp;
  }
  return nums;
};

console.log(rotateLeft__2([1, 2, 3, 4, 5], 1));
console.log(rotateLeft__2([1, 2, 3, 4, 5], 2));
console.log(rotateLeft__2([1, 2, 3, 4, 5], 3));
console.log(rotateLeft__2([1, 2, 3, 4, 5], 4));
console.log(rotateLeft__2([1, 2, 3, 4, 5], 5));
console.log(rotateLeft__2([1, 2, 3, 4, 5], 6));
console.log(rotateLeft__2([1, 2, 3, 4, 5], 7));

//method3 Java
// class Result {

//     /*
//      * Complete the 'rotateLeft' function below.
//      *
//      * The function is expected to return an INTEGER_ARRAY.
//      * The function accepts following parameters:
//      *  1. INTEGER d
//      *  2. INTEGER_ARRAY arr
//      */

//     public static List<Integer> rotateLeft (int d, List<Integer> arr) {
//     // Write your code here
//        d = d % arr.size();
//        for(int i = 0; i < d; i++){
//            int tmp = arr.get(0);
//            arr.remove(0);
//            arr.add(tmp);
//        }
//        return arr;
//     }
// }
