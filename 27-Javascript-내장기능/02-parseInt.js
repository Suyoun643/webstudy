/**
 * parseInt(value)
 * 
 * 파라미터를 10진 정수값으로 변환한다.
 * 변환할 수 없다면 NaN을 반환.
 */

console.log(parseInt('015'));           //따옴표를 제거하고 015는 15와 동일
console.log(parseInt(15.99));           //소수점 이하는 버림
console.log(parseInt('15,123'));        //콤마(,)는 단순 문자열이므로 콤마 이후 버려진다.
console.log(parseInt('15*3',10));       //문자열에서 '*'는 곱하기가 아니라 단순 글자이므로 '*'는 버려진다.
console.log(parseInt('15e2',10));       //문자열 'e'이후는 버려진다.
console.log(parseInt('15px',10));       //문자열 'px'는 버려진다.

//NaN로 변환
console.log(parseInt("Hello", 8));  //전부 숫자가 아님.