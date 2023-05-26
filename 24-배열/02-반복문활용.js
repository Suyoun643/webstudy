/** 1) 기본 반복문 */
// 5칸으로 구성된 빈 배열 생성
const myArr = new Array(5);
console.log(myArr);

// 배열의 길이
const len = myArr.length;

// 0부터 배열의 길이(5)보다 작은 동안 반복
// -> 0~4
for (let i=0; i<len; i++) {
    myArr[i] = i * 10;
}

console.log(myArr);


/** 2) For Of 반복문 */
console.group("1차배열의 탐색");

const data = [4, 5, 2, 1, 3];
for (const item of data) {
    console.log(item);
}

console.groupEnd();