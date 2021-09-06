const json = {
  name: "홍길동",
  addr: "이몽룡",
  tel: "010=111",
};
console.log(json);

const json1 = { ...json }; // json에 있는 값을 json1으로 복제
console.log(json1);

// json에 담긴 데이터를 // json2 로 복제하라
// 복제를 하면서 tel 속성의 값만 222-2222으로 변경하여 저장하라
const json2 = { ...json, tel: "222-2222" };
console.log(json2);
