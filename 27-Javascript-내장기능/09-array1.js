/**
 * 배열의 원소를 추가, 삭제, 변경하는 방법
 */

//테스트를 위한 배열
const data = [10, 20, 30, 40, 50];

//배열의 맨 끝에 요소 추가 (파라미터 수 제한 없음.)
data.push(60, 70);
console.log(data);      // -> [10, 20, 30 , 40, 50, 60, 70]

//마지막 요소를 리턴하고 제거
const k = data.pop();
console.log(k);         // -> 70
console.log(data);      // -> [10, 20, 30, 40, 50, 60]

//맨 앞 요소를 리턴하고 제거
const x = data.shift();
console.log(x);         // -> 10
console.log(data);      // -> [20, 30, 40, 50, 60]

//맨 앞에 요소 추가 (파라미터 수 제한 없음)
data.unshift(0, 10);
console.log(data);      // -> [0, 10, 20, 30, 40, 50, 60]

//2번째 위치부터 3개를 잘라서 반환하고 원본에서는 제거
const z = data.splice(2, 3);
console.log(z);         // -> [20, 30, 40]
console.log(data);      // -> [0, 10, 50, 60]

//0번째 위치부터 2개를 제거하고 그 위치에 다른 요소들을 배치함
//제거한 수보다 추가되는 원소수가 많을 경우 배열이 확장됨. 기존의 원소들은 뒤로 밀림.
//제어한 수보다 추가되는 원소수가 적을 경우 배열이 축소됨.
data.splice(0, 2, 'a', 'b', 'c');
console.log(data);        // -> ['a', 'b', 'c', 50, 60]

//삭제할 원소의 수를0으로 지정하면 중간 삽입 효과가 있음.
//기존의 원소들은 뒤로 밀려남.
data.splice(3, 0, 'd', 'e');
console.log(data);      // -> ['a', 'b', 'c', 'd', 'e', 50, 60]

//a에 b와 c를 결합한 새로운 배열을 반환
const a = [1, 2];
const b = [3, 4, 5];
const c = [6, 7, 8, 9];
const d = a.concat(b, c);
console.log(d);     // -> [1,2,3,4,5,6,7,8,9]

//배열에서 원하는 원소가 있는지 여부 확인하기
let arr1 = [1, 0, false];

console.log(arr1.indexOf(0));           // 1
console.log(arr1.indexOf(false));       // 2
//발견하지 못했으면 -1을 반환한다.
console.log( arr1. indexOf(null));      // -1

// arr.includes(item, from)는 인덱스 from부터 시작해 item이 있는지를 검색하는데, 해당하는 요소를 발견하면 true를 반환한다.
console.log(arr1.includes(1));      //true
console.log(arr1.includes(100));    //false