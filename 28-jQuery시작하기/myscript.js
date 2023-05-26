console.log("안녕하세요. Javascript");

/**
 *  document - 웹페이지
 * dlement - HTML 태그
 * innerHTML - 시작태그와 끝태그 사이
 */
const p1 = document.getElementById("area1");
p1.innerHTML = "안녕하세요. Javascript";

const p2 = document.querySelector("#area2");
p2.innerHTML = "Hello. 자바스크립트";

const test = () => {
    document.querySelector("#area3").
    innerHTML ="Hello Javascript";
};
