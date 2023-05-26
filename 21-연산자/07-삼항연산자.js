const age1 = 19;
const type1 = age1 >= 20 ? "성인" : "청소년";
console.log("당신은 %s입니다.", type1);


const age2 = 22;
const type2 = age2 >= 20 ? "성인" : "청소년";
console.log ("당신은 %s입니다.", type2);


//태어난 년도 구하기 예시
const code = 3;      //주민번호 뒷부분의 첫 글자.
const yy = 6;        //태어난 년도 (주민번호 앞 두글자에 해당하는 값)
const result = yy + (code == 3 || code == 4 ? 2000 : 1900);
console.log("태어난 년도는 %d", result);