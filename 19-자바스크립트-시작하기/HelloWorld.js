"use strict"; // 엄격모드 적용

// 메시지 그룹핑
console.group("MyMessage1");
console.log("안녕하세요. Javascript1");
console.log("안녕하세요. Javascript2");
console.log("안녕하세요. Javascript3");
console.groupEnd();

console.group("MyMessage2"); // 출력하는 내용을 그룹으로 묶음
console.log("안녕하세요. Javascript4");

console.group("MyMessage2-1"); // 그룹안에 하위그룹 생성
console.log("안녕하세요. Javascript5");
console.log("안녕하세요. Javascript6");
console.groupEnd(); // 하위 그룹으로 묶기 끝!!
console.groupEnd(); // 그룹으로 묶기 끝!!