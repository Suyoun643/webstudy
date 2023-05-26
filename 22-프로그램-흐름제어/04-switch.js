/** 1) Switch 기본 구문 */
console.group("1) Switch 기본 구문");

const 국어 = "B";

//조건에 맞는 `case` 블록부터  `break` 키워드를 만날 때 까지 실행한다.
switch (국어) {
    case 'A':
        console.log("A학점 입니다.");
        break;
    case 'B':
        console.log("B학점 입니다.");
        break;
    case 'C':
        console.log("C학점 입니다.");
        break;
    default:
        console.log("C학점 미만 입니다.");
        break;
}

console.groupEnd();

/** 2) break가 없는 경우 */
console.group("2) break가 없는 경우");

const 영어 = "B";

switch (영어) {
    case 'A':
        console.log("A학점 입니다.");
    case 'B':
        console.log("B학점 입니다.");
    case 'C':
        console.log("C학점 입니다.");
    default:
        console.log("C학점 미만 입니다.");
}

console.groupEnd();

/** 3) 의도적으로 break 조절하기 */
// case는 다르지만 수행해야할 로직이 동일한 경우 의도적으로 break의 위치를 조절할 수 있다.
console.group("3) 의도적으로 break 조절하기");

const 수학 = "B";

switch (수학) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다.");
        break;
        default:
            console.log("이 과목을 Pass하지 못했습니다.");
            break;
}

console.groupEnd();