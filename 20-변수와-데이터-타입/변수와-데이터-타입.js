/** 전역변수 */

/** 1) 변수의 선언과 할당 */
// 변수의 선언
var myNumber1;
// 할당
myNumber1 = 100;
console.log(myNumber1);

/** 2) 변수의 선언과 할당 통합 */
var myNumber2 = 123;
console.log(myNumber2);

/** 3) 변수값 변경하기 */
// 한번 만들어진 변수는 다른 값으로 교체 가능
myNumber2 = 456;
console.log(myNumber2);

/** 4) 변수의 재선언 */
// 원칙적으로 한번 선언한 변수는 재선언이 불가능함
// JS의 전역변수는 재선언이 가능
// 이는 일반적인 프로그래밍 언어의 규칙에 위배되므로 전역변수를 위한 `var`키워드의 사용은
// 권장되지 않는다.
var myNumber3 = 300;
console.log(myNumber3);

// 동일한 변수 재선언
var myNumber3 = 789;
console.log(myNumber3);

//----------------------------------------------------------------
/** 지역변수 */


/** 1) 선언, 할당 */
// 선언
let myNumber1;
//할당
myNumber1 = 100;
console.log(myNumber1);

/** 2) 선언,할당 통합 */
let myNumber2 = 200;
console.log(myNumber2);

/** 3) 중복선언 금지 */
let myNumber3 = 1;
console.log(myNumber3);

// 앞에서 이미 선언된 변수이므로 에러 발생함.
let myNumber3 = 2;
console.log(myNumber3);

//-----------------------------------------------------------------
/** 상수 */

const MY_VALUE1 =123;
console.log(MY_VALUE1);

MY_VALUE1 = 234;
// const로 선언된 변수이므로 값을 변경할 수 없다.(에러)

//-----------------------------------------------------------------
/** 데이터 타입 */

/** 1) 지금 바로 익혀야 하는 데이터 타입 */
// Number
let sampleValue1 = 123;
console.log(typeof sampleValue1);

// Boolean,논리값 (true(참),false(거짓)만 표현 가능)
let sampleValue2 = true;
console.log(typeof sampleValue2);

// 쌍,홑 따옴표로 감싼 경우 문자열(문장,글자의 집합)로 인식
let sampleValue3 = "hello world";
console.log(typeof sampleValue3);

//-------------------------------------------------------------
/** 형식문자 */

// 기본 데이터 타입
const num = 123.45;
const str = "hello";
const bool = true;

/** 1) (중요) 숫자 표현을 위한 문자 : %d */
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num);     // 정상
console.log("숫자값 출력하기=%d", str);     // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", bool);    // 1 (0은 거짓, 0이외의 모든 수는 참. 일반적으로 1을 참으로 처리)
console.log("숫자값 출력하기=%d", obj);     // 객체에 대한 Hash값 출력
console.log("숫자값 출력하기=%d", arr);     // 숫자가 아니므로 NaN
console.log("숫자값 출력하기=%d", json);    // 숫자가 아니므로 NaN
console.groupEnd();

/** 2) (중요) 문자열 표현을 위한 문자 : %s */
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%s", num);     // 정상
console.log("숫자값 출력하기=%s", str);     // 정상
console.log("숫자값 출력하기=%s", true);    // 정상
console.log("숫자값 출력하기=%s", obj);     // 정상
console.log("숫자값 출력하기=%s", arr);     // 정상
console.log("숫자값 출력하기=%s", json);    // 정상
console.groupEnd();

const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
console.log("%s님의 나이는 %d세 입니다.", student, age);
console.groupEnd();

//---------------------------------------------------------------
/** 변수 출력 */
const a = "hello";
console.log(`${a} Javascript`);

const name = '민수';
const age = 20;
const message = `${name}는 ${age}세 입니다.`;
console.log(message);
