/** 이중 반복문 구구단 */

for (let i=2; i<10; i++) {  // 2~9

    console.group(`${i}단`);

    for (let j=1; j<10; j++) {  //1~9
        const k = i * j;
        console.log(`${i} x ${j} = ${k}`);
    }

    console.groupEnd();
}