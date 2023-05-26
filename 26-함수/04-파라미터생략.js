/** 함수의 파라미터 생략 */

// 두 개의 파라미터를 갖는 함수 정의
function foo(x,y){
    console.log("x="+x+",y="+y);

    // 파라미터가 생략될 수 있으므로 견고한 코드라고 볼 수 없다.
    // let result = x+y;

    let result = 0;
    if(x !=undefined){result += x;}
    if(y !=undefined){result += y;}

    console.log("result=" + result);
}

foo(100,200);
foo(500);
foo();