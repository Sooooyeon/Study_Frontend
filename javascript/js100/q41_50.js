// 41번 소수판별
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
const prime = prompt("숫자를 입력해주세요.");

function primeFunc(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log("NO");
            return false;
        }
    }
    if (n === 1) {
        console.lpg()
    }
    console.log("NO");
    return false;
}

primeFunc(prime)









// 42번
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요 ?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.
// ** 제한 조건 **
//     2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = "5";
const date = "5";

function solution(a, b) {
    const theDay = new Date(`2020-${a}-${b}`);
    console.log(day[theDay.getDay()]);
}

solution(month, date);









// 43번 10진수를 2진수로
// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력

// 방법1
let dec = prompt("숫자를 입력하세요.");
let arrBinary = [];
while (dec) {
    arrBinary.push(dec % 2);
    dec = Math.floor(dec / 2);
}
console.log(arrBinary.reverse().join(""));

// 방법2
let dec = parseInt(prompt("숫자를 입력하세요."));
console.log(dec.toString(2));









// 44번 각 자리수의 합
let num = "1234";
let sum = 0;
while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log(sum);









// 45번 getTime()함수 사용해 현재 연도 구하기
const theDate = new Date();
console.log(Math.floor(theDate.getTime() / (60 * 60 * 24 * 365 * 1000)) + 1970);









// 46번 각 자리수의 합 2
// 1부터 20까지의 모든 숫자로 일렬로 놓고 모든 자릿수의 총 합을 구하시오
let arr = [];
let total = 0;
for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
}

arr.forEach((n) => {
    while (n) {
        total += n % 10;
        n = Math.floor(n / 10);
    }
});

console.log(total);









// 47번 set 자료형의 응용
// 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력하기
const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
};

let result = new Set();
for (let key in people) {
    result.add(people[key]);
}
console.log(result.size);









// 48번 대소문자 바꿔서 출력하기
const str = "AAABBBcccddd";
let arr = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
        arr.push(str[i].toLocaleLowerCase());
    } else {
        arr.push(str[i].toUpperCase());
    }
}
console.log(arr.join(""));









// 49번 최댓값 구하기
let result = "10 9 8 7 6 5 4 3 2 1";
result = result.split(" ").map((n) => {
    return parseInt(n, 10)
});

result.sort((a, b) => {
    return b - a;
});

console.log(result[0]);









// 50번 버블정렬 구현하기
function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                let value = result[j];
                result[j] = result[j + 1];
                result[j + 1] = value;
            }
        }
    }
    return result;
}

const items = "9 5 1 2 6 7".split(" ").map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));