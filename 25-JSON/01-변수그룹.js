/** 
 * json -> key와 value의 쌍으로 구성된 자료구조
 */

/** 변수들의 그룹으로서의 JSON 정의 */
const student ={
    // key: value, key: value ... 의 형식으로 나열
    // 숫자, boolean, null, undefined는 따옴표 적용 안함
    studno: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-1231-2342"
};


/** 1) 각 데이터 출력하기 */
// 데이터에 접근하는 기본적인 방법은 객테이름.하위정보이름
// --> 90% 이상의 경우에서 이 방식이 사용됨
console.group("출력 type1");
console.log("학번: "+student.studno);
console.log("학년: "+student.grade);
console.log("이름: "+student.name);
console.log("연락처: "+student.phoneno);
console.groupEnd();