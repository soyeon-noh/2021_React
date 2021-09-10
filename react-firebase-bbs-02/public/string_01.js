let str = "";
console.log(str);

if (str) {
  // ""는 false가 담긴다
  console.log(str);
} else {
  console.log("없음");
}

let num = 0;
console.log(num);
if (num) {
  // 0은 if문에 담겨 boolean 값이 되면 false 다.
  console.log(num);
} else {
  console.log("숫자 없음");
}

/**
 * JS 에서는
 * null, "", 0, undefined, NaN(넘버가아니다) 등등의 값들이
 * if()를 만나면 false가 된다.
 */
let bYes = true || true;
bYes = true || false;
bYes = false || false;
bYes = false || true;

// 문자열 str에 담긴 값이 ""이거나 null 이면
// 뒤의 "대한민국" 문자열을 result 에 담아라
// 만약 str에 문자열이 담겨 있으면 그 값을 result에 담아라
let result = str || "대한민국"; // true
console.log(result);

if (str == "") {
  // 위와 같은 코드
  result = "대한민국";
}
