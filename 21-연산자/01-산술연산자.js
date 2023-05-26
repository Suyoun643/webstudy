/** 1) 사칙연산 출력하기 */
const a =5;
const b =3;
console.log(a+b);       //8
console.log(a-b);       //2
console.log(a*b);       //15

/** 2) 연산 결과를 다른 변수에 할당 */
const x = 5;
const y = 3;
const z = x + y -2;
console.log(z);     //6

/** 3)나눗셈 주의사항 */
// 일반적인 나눗셈
const myValue1 = 10;
const myValue2 = 4;
console.log(myValue1 / myValue2);   //2.5

//나누어 떨어지지 않는 나눗셈
const myValue3 = 4;
const myValue4 = 3;
console.log(myValue3 / myValue4);   //1.3333333333

/** 4)문자열 연산 */
// 1) 문자열 끼리의 덧셈 (문장간에는 다른 연산자는 불가)
const myString1 = "Hello";
const myString2 = "Hello";
console.log(myString1 + myString2);  //HelloWorld

// 2) 문자열과 다른 타입의 덧셈
// --> 문자열과 연산되는 다른 타입은 모두 문자열로 자동 변환된다.
// 결국 문자열끼리의 덧셈과 동일한 결과
console.log("안녕하세요." + 123);     //안녕하세요.123
console.log("안녕하세요." + true);     //안녕하세요.true
console.log("안녕하세요." + null);     //안녕하세요.null
