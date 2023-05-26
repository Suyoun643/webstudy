/**
 * 배열을 탐색하는 방법
 */

// 테스트를 위한 배열
const arr1 = [10, 20, 30, 40, 50];
/** 
 * 고전적 방법 - 반복문을 활용하여 배열의 원소 탐색하기
 */
for (let i = 0; i < arr1.length; i++) {
    if (i == 3) {
        console.log('~~~ 반복중단!!!');
        break;
    }
    console.log('%d번째 원소==> %d', i, arr1[i]);
}

console.log('---------------------------');

/**
 * forEach 메서드를 활용하여 배열의 모든 원소 탐색.
 * - 콜백함수에게 배열의 값과 인덱스를 전달한다.
 * - 콜백함수는 원소의 수 만큼 순차적으로 실행된다.
 */

const arr2 = [10, 20, 30, 40, 50];

arr2.forEach((v, i) => {
    if ( i == 3) {
        console.log('~~~반복중단!!');
        //break는 for,while문에서만 사용 가능하기 때문에 함수 안에서는 사용할 수 없다.
        //break;
        //forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향이 없다.
        return;
    }
    console.log('%d번째 원소 ==> %d', i, v);
});

console.log('-------------------');

/**
 * 탐색을 중단하는 기능을 제공하는 some함수
 * - some 함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
 */

const arr3 = [ 10, 20, 30, 40, 50];

arr3.some((v, i) => {
    if (i == 3) {
        console.log('~~~반복중단!!!');
        return true;
    }
    console.log('%d번째 원소 ==> %d' , i, v);
});

console.log('----------------');

/**
 * 배열의 원소를 가공하여 새로운 배열 만들기
 */
//map함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
//hello는 반드시 원본 배열과 같은 길이를 갖는 배열이다.
//리턴하지 않은 index에 대한 원소는 undefined가 된다.
const arr4 = [10, 20, 30, 40, 50];
const hello = arr4.map((v,i) => {
    return v * 10;
});

console.log(hello);

//화살표 함수는 처리로직이 한줄인 경우 "{}"와 ";", "return" 키워드 생략 가능하므로 아래와 같이도 표현 가능함.
const arr5 = [10, 20, 30, 40, 50];
const world = arr5.map((v,i) => v * 10);

console.log(world);

/**
 * 배열 검색
 */
const arr6 = [5, 12, 8, 131, 44];

//주어진 판별함수를 만족하는 첫번째 값을 반환한다. 못찾으면 undefined를 반환한다.
//찾고자 하는 항목이 아닌 검색 규칙을 구현한 콜백함수를 전달해야 한다.
const found1 = arr6.find((v) => {
    //파라미터로 전달되는 v는 배열의 모든 원소가 순차적으로 전달된다.
    console.log(`v=${v}`);

    //v를 우리가 원하는 조건에 충족하는지 검사하여 true/false를 리턴
    //true를 리턴하는 순간 배열의 탐색을 중단한다. (break와 동일한 기능)
    if (v % 2 == 0) {
        //true가 리턴되는 경우 v는 found에 저장된다.
        return true;
    } else {
        //false가 리턴되는 경우 v는 버려진다.
        return false;
    }
});

console.log(found1);

const arr7 = [5, 12, 8, 131, 44];
const found2 = arr7.find(v => v % 2 == 0);
console.log(found2);

/**
 * 배열에서 특정 조건을 충족하는 원소를 추출하기
 */
// 1) 전통적인 방법
const arr8 = [5, 12, 8, 131, 44];
const d1 = [];

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] % 2 == 0) {
        d1.push(arr8[i]);
    }
}
console.log(d1);

// 2) foreach를 사용하는 방법
const arr9 = [5, 12, 8, 131, 44];
const d2 = [];

arr9.forEach((v, i) => {
    if (v % 2 == 0 ) {
        d2.push(v);
    }
});
console.log(d2);

const arr10 = [5, 12, 8, 131, 44];
const d3 = arr10.filter(function (v, i, arr) {
    if (v % 2 == 0){
        //true가 리턴되는 경우 v는 d3배열의 원소로 저장된다.
        //true를 리턴하더라도 배열의 모든 원소를 탐색하기 전까지는 종료되지 않는다.
        return true;
    } else {
        //false가 리턴되는 경우 v는 버려진다.
        return false;
    }
});

console.log(d3);

const arr11 = [5, 12, 8, 131, 44];
const d4 = arr11.filter((v, i, arr) => v % 2 == 0);
console.log(d4);

/**배열 정렬 */
const arr12 = [2, 1, 15];
//퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.
//--> 배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.
//arr12.sort();
//console.log(arr12);

//sort 함수도 정렬 조건을 콜백함수로 처리한다.
arr12.sort(function (a, b) {
    //정렬을 위해 비교되는 원소값들이 파라미터로 전달된다.
    console.log('a=%s, b=%s', a, b);

    //리턴값이 양수인 경우: a가 b보다 크다.
    //리턴값이 음수인 경우: b가 a보다 크다.
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(arr12);

/**역순배치 */
let arr13 = [1, 2, 3, 4, 5];
arr13.reverse();
console.log(arr13);

/**배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 */
let arr14 = [1, 2, 3, 4, 5];

/**accumulator의 초기값 지정하기 */
//reduce의 콜백함수 다음에 두 번째 인자로 accumulator의 초기값을 설정할 수 있다.
//이 경우 currentValue에는 배열(arr14)의 0번째 요소부터 전달되고 index는 0부터 시작된다.
const result3 = arr14.reduce((accumulator, currentValue, index, array) => {
    console.log(`accumulator=${accumulator}, currentValue=${currentValue}, index=${index}`);
    return accumulator + currentValue;
}, 0);

console.log(`result3=${result3}`);

/**응용 */
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299},
];

//전체 확진자 수 구하기
//객체를 탐색할 때는 accumulator의 초기값을 설정하고 0번째 원소부터 currentValue로 받아야 한다.
const total = covid19.reduce((acc, cur) => + cur.active, 0);
console.log(`전체 확진자 수: ${total}`);
console.log(`평균 확진자 수: ${total/covid19.length}`);