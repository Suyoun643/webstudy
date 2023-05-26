/** 목록의 아이템으로 사용될 JSON 객체 정의하기 */
const student1 = {
    studno:10101,
    grade:1,
    name:"학생1"
};

const student2 = {
    studno:20202,
    grade:2,
    name:"학생2"
};

/** 목록 구조를 갖는 JSON 객체 */
const classRoom ={
    student:[student1,student2]
}

console.log(classRoom);

/** 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다 */
for (let i=0; i<classRoom.student.length; i++) {
    console.group(i+"번째 학생");
    console.log(">>학번:"+classRoom.student[i].studno);
    console.log(">>학년:"+classRoom.student[i].grade);
    console.log(">>이름:"+classRoom.student[i].name);
    console.groupEnd();
}


//for~of문을 사용할 경우 몇 번째 항목인지를 알기 위해서는 반복문 시작전에
// 별도의 초기식과 반복문 안에 별도의 증감식을 추가해야 한다.
let i=0;    //초기식
for(const s of classRoom.student) {
    console.group(i+"번째 학생");
    console.log(">>학번:"+s.studno);
    console.log(">>학년:"+s.grade);
    console.log(">>이름:"+s.name);
    console.groupEnd();
    i++;    //증감식
}