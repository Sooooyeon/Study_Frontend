
// 008 함수 - 재사용성을 높이기 위함 -----------------------------------------------------

function circleWidth(r) {
    let width = r * r * 3.14;
    return; // 리턴값을 사용하지 않으면 undefined로 나옴, 리턴 - 함수가 있는 자리에 반환
}

document.write(circleWidth(10));

function test() {
    document.write('hello world!'); // 요소에서 onclick에 test함수를 넣어 화면에 출력
}









// 009 지역변수와 전역변수 -----------------------------------------------------

var z = 100;

function sum(x) { // x는 매개변수(parameter)-(내부적으로 선언) 이면서 지역변수(local val)
    let y = 50; // y는 지역변수
    return x + y;
}
document.write(sum(10)); // 10은 전달인자(argument)
document.write('<br>');
document.write(x, y); // x와 y는 지역변수로 함수 밖에서는 사용 불가능해 출력되지 않는다.
document.write(z); // z는 전역변수로 어디서든 사용 가능해 출력된다.







// 010 Arrow function - 화살표 함수 (간결하게 코드를 짜야할때 사용)-----------------------

function sum(x, y) {
    return x + y;
}

let sumArrowFunction = (x, y) => x + y;

console.log(sum(10, 20));
console.log(sumArrowFunction(10, 20));







// 011 함수 표현식과 함수 선언문, 콜백함수 ----------------------------------------

// 함수 선언문 - 어디서든 sum 호출 가능
function sum(x, y) {
    return x + y;
}

// 함수 표현식
let sumXY = function (x, y) {
    return x + y;
};
let copy = sumXY;
console.log(copy(10, 20));

// 콜백함수 - 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수
function sum(x, y, c) {
    c(x + y);
    return x + y;
}

function con(s) {
    document.write(s);
}

sum(10, 20, con); // 30이 출력된다.