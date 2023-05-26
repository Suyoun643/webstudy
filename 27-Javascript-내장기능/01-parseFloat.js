/**
 *  parseFloat(value)
 * 
 * 주어진 값에서 변환한 부동소수점 수(실수)를 리턴.
 * 변환할 수 없으면 NaN을 리턴
 */

//정상적인 경우
console.log(parseFloat(3.14));
console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2'));
console.log(parseFloat('0.0314E+2'));

//NaN을 반환하는 경우
console.log(prarseFloat(true));
console.log(prarseFloat(false));
console.log(prarseFloat('FF2'));