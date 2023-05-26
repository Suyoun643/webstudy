/** 1) 논리값을 사용한 경우 */
console.group("1) 논리값을 사용한 경우");

// 일만구문 - 무조건 실행된다.
console.log("배고픈데");
// 조건문에서 사용할 조건값을 생성
const have_money = true;
//const have_money = false;

if (have_money) {
    console.log("식당에서");
}

console.log("밥을 먹자");

console.groupEnd();

/** 2) 숫자형 값을 사용한 경우 */
console.group("2) 숫자형 값을 사용한 경우");

const money1 = 10000;
//const money1 = 0;