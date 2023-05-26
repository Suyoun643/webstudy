/**
 *  조건문 안의 조건문
 *  - 특정 조건이 참으로 판단된 경우 세부 조건을 판별한다.
 */
const point =78;

if (point >= 70) {
    console.log('pass 입니다.');

    if (point > 90) {
        console.log ('A');
    } else if (point > 80) {
        console.log('B');
    } else {
        console.log('C');
    }
} else {
    console.log('NonPass 입니다.');
}
