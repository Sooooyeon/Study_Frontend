// 21번 set

const list = [1, 2, 2, 3, 4, 5, 5, 6]

// set - 중복되지 않은 데이터를 저장하는 데이터 구조
// setVal.add(10); 배열 끝에 10이 추가 됨
// setVal.delete(10); 베열에서 값을 찾아 삭제
// setVal.has(10); 안에 값이 있는지 없는지를 true, false로 반환해 줌

let setVal = new Set(list);
console.log(setVal);
// 중복된 값이 제거되어 출력됨









// 24번 대문자로 바꿔서 출력하기

const name = prompt("이름을 입력하세요.");

console.log(name.toUpperCase()); // 모두 대문자로 출력
console.log(name.toLowerCase()); // 모두 소문자로 출력









// 25번 대문자로 바꿔서 출력하기 - 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수 만들기

function circleWidth(r) {
    return r * r * 3.14;
    // return 이 없으면 값이 반환되지 않음.
}

console.log(circleWidth(10)); // 314









// 26번 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 - 한글 이름을 키, 영어 이름을 값으로하는 객체 만들기

const planets = {
    수성: "Mercury",
    금성: "Venus",
    지구: "Earth",
    화성: "Mars",
    목성: "Jupiter",
    토성: "Saturn",
    천왕성: "Uranus",
    해왕성: "Neptune"
};

const name2 = prompt("행성 이름을 입력하세요.");
console.log(planets[name2]);


// .으로 연결되는 연산자는 직접 객체의 키를 입력해야만 사용가능! (변수 만들어서 사용 불가능)

// ex)
console.log(planets.목성);

//const name3 = prompt("행성 이름을 입력하세요.");
//console.log(planets.name3); --> 불가능!









// 27번 객체 만들기 - 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어질 때, 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력하기

// 입력
// Yujin Hyewon
// 70 100

// 출력
// { 'Yujin': 70, 'Hyewon': 100 }

const keys = prompt().split(" ");
const values = prompt().split(" ");
let obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}

console.log(obj);









// 28번 2-gram --> 문자열에서 2개의 연속된 요소를 출력하는 방법

const word = "안녕하세요";

for (let i = 0; i < word.length - 1; i++) {
    console.log(word[i], word[i + 1]);
}









// 29번 입력한 값이 대문자인지 확인하기
const word2 = "h";

if (word2 === word2.toUpperCase()) {
    console.log("Yes");
} else {
    console.log("No");
}









// 30번 문자열 속 문자 찾기 - 해당 문자가 시작하는 index 반환

const word3 = "파인애플은 정말 맛있습니다."; // 문자열 입력
const keyword = "애플"; // 찾을 문자 입력

console.log(word3.indexOf(keyword)); // 2
// indexOf를 호출한 문자열과 indexOf의 매개변수를 비교해서 같은 문자열의 첫번재 인덱스를 반환하는것이 indexOf 메소드가 하는 일
