/** 간단한 화살표 함수 기본형 */

// const foo = function(x) {
const foo = (x) => {
    for (let i=0; i<x; i++) {
        console.log("Hello World");
    }
};

foo(7);


/** 파라미터가 하나만 존재할 경우 소괄호 생략 */
// 파라미터가 없거나, 두 개 이상이면 괄호 생략 불가.
const bar = x => {
    for (let i=0; i<x; i++) {
        console.log("Hello World");
    }
};

bar(3);


/** 처리 로직이 한 줄만 존재하는 경우 */
// 파라미터 x,y를 받아서 x+y를 리턴하는 arrowReturn 이라는 이름의 함수
// const hello = (x, y) => {
//      return x*y;
// };
const hello = (x,y) => x*y;
console.log(hello(100, 400));