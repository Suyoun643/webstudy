/** 1) 연산 결과를 새로운 변수에 대입 */
let myNumber1 = 123;
let myNumber2 = 234;
let myResult = myNumber1 + myNumber2;
console.log(myResult);   ///357

/** 2) 이미 생성된 변수의 값을 다른 값으로 변경 */
let myNumber3 = 1;
let myNumber4 = 2;

myNumber3 = 200;
myNumber4 = 300;

console.log(myNumber3);   //200
console.log(myNumber4);   //300

/** 3) 연산 결과를 변수 스스로에게 덮어 씌우기 */
let selfValue = 300;
selfValue = selfValue + 100;
console.log(selfValue);   //400