/** 1) 다른 배열을 원소로 갖는 배열 */
const a = [1, 2];
const b = [4, 5, 6, 7];
const myArr1 = [a,b];
console.log(myArr1);

/** 2) 축약표현 */
// 2행 3열 배열 만들기
var myArr2 = [ [1, 2, 3], [4, 5, 6] ];
console.log(myArr2);
console.log(myArr2[0]);
console.log(myArr2[1]);

/** 3) 2차 배열의 원소 접근 */
// 행->열 순으로 인덱스를 열거한다.
console.log(myArr2[0][0]);  // --> 1
console.log(myArr2[0][1]);  // --> 2
console.log(myArr2[0][2]);  // --> 3
console.log(myArr2[1][0]);  // --> 4
console.log(myArr2[1][1]);  // --> 5
console.log(myArr2[1][2]);  // --> 6

