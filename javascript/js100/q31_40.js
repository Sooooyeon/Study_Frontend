// 31번 자바스크립트 자료형의 복잡도
// 시간복잡도 : 알고리즘이 문제를 계산할 때 걸리는 시간을 의미
// 시간복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1) arr[i]
// 2) arr.push(5)
// 3) arr.slice()
// 매개변수에 따라 배열의 크기가 달라져 시간복잡도가 달라짐 
// 4) arr.pop()
// 5) arr.includes(5)
// 매개변수 값이 들어있는지 true false로 반환. 배열이 길어질수록 탐색해야 할 양이 많아져 탐색 시간이 길어짐









// 32번 대문자로 바꿔서 출력하기
// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

// 입력: 안녕하세요.저는 제주대학교 컴퓨터공학전공 혜림입니다.
// 출력 : 5

const word = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다."
console.log(word.split(' ').length);








// 33번 거꾸로 출력하기
const nums = "1 2 3 4 5";
const arr = nums.split(" ").reverse();

let reverseVal = "";
//초기화

for (let i = 0; i < arr.length; i++) {
    reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal);








// 34번 sort 구현하기 - 키가 주어지면 순서대로 섰는지 확인하는 프로그램 작성
const unsorted = prompt();
let sorted = "";

sorted = unsorted.split(" ").sort(function (a, b) {
    return a - b;
}).join(" ");

if (unsorted === sorted) {
    console.log("Yes");
} else {
    console.log("No");
}

// 176 156 155 165 166 169  -> No
// 155 156 165 166 169 176  -> Yes








// 35번 Factory 함수 사용하기
function one(n) {
    function two(x) {
        return Math.pow(x, n);
    }
    return two;
}

const a = one(2); // x ** 2
const b = one(3); // x ** 3
const c = one(4); // x ** 4

console.log(a(10)); // 100
console.log(b(10)); // 1000
console.log(c(10)); // 10000








// 36번 구구단 출력하기 - 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

const num = prompt("1~9까지의 숫자 중 하나를 입력하세요.");

let result = ""

for (let i = 1; i < 10; i++) {
    result = result + (num * i) + " ";
}

console.log(result)








// 37번 반장선거  학생들이 선택한 후보들을 입력받으면 적힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성

const array = ["원범", "원범", "원범", "원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"]
let result2 = {};
let winner = ""

// for in 문 배열의 모든 원소를 순회
for (let index in array) {
    let val = array[index];
    result2[val] = (result2[val] === undefined) ? 1 : result2[val] = result2[val] + 1;
    // {원범 : undefined} 현재 키만 저장된 상태로 undefined 면 1을 반환, undefined가 아니면 값에 +1
    // {원범:2, 혜원:4, 유진:2}
}
winner = Object.keys(result2).reduce(function (a, b) {
    return result2[a] > result2[b] ? a : b
});
// 원소를 하나하나 순회하며 함수를 실행해 a에 중첩(결과값이 중첩) 자동으로 순서에 맞게 a,b에 들어감
console.log(winner);
console.log(`${winner}(이)가 총 ${result2[winner]}표로 반장이 되었습니다.`);








// 38번 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 주기로 한다. 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.
const scores = ["97", "86", "86", "86", "75", "66", "55", "97", "85", "97", "97", "95"]
scores.sort(function (a, b) {
    return a - b;
})
console.log(scores)

let top3 = [];
let count = 0;
while (top3.length < 4) {
    let value = scores.pop();
    if (!top3.includes(value)) {
        top3.push(value);
    }
    count++;
}

console.log(top3);
console.log(count - 1);








// 39번 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

const word2 = "hqllo my namq is hyqwon";
// split $ join 사용

console.log(word2.split("q").join("e"));








// 40번 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다.몸무게는 무작위로 주어집니다.

const weightLimit = prompt("무게제한을 입력해주세요 : ");
const memberCount = prompt("몇명이 탑승하나요? :");
let count = 0;
let totalWeight = 0;

for (let i = 0; i < memberCount; i++) {
    totalWeight = totalWeight + parseInt(prompt("몸무게를 입력해주세요 :"),10);
    if(totalWeight <= weightLimit){
        count++;
    }
}
console.log(count)


