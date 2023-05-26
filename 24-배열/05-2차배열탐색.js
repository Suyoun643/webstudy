/** 2차 배열의 탐색 */
const myArr = [
    [1, 2, 3],
    [4,5,6]
];

// 2차 배열을 반복문으로 탐색할 때는 2중 반복문이 사용된다.
// 바깥의 반복문을 행을 담당
for (let i=0; i<myArr.length; i++) {
    console.group(i+"번째 행---------");
    console.log(myArr[i]);

    // 안쪽의 반복문은 i번째 행에 대한 열을 담당
    for (let j=0; j<myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
    console.groupEnd();
}


/** for~of문을 활용한 탐색 */
console.group("2차배열의 탐색");

const myArr2 = [
    [1,2,3],
    [4,5,6]
];

for (const item of myArr2){
    console.log(item);

    for (const sub of item){
        console.log(sub);
    }
}

console.groupEnd();