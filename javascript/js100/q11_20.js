// 11번 for문을 이용한 기본 활용 - 1부터 100까지 더하기
let s = 0;

for (let i = 1; i <= 100; i++) {
    s = s + i;
}

console.log(s);









// 12번 게임 캐릭터 클래스 만들기 --------------------------------------

class Wizard {
    constructor(health, mana, armor) { //객체에서 인스턴스가 생성이 될 때 반드시 실행이 되는 함수, 객체 초기화 역할을 해주는 생성자 함수
        this.health = health;
        // Wizard 클래스로 만들어지는 인스턴스임을 명시하기 위해 this 사용해 선언
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 출력
// 545 210 10
// 파이어볼

// Q. 왜 attck() 함수는 constructor 밖에서 정의될까?
//  constructor 내부에 정의된 함수는 앞으로 인스턴스가 만들어 질때마다 새롭게 메모리에 할당되지만,  constructor 밖에 정의된 함수는 인스턴스가 만들어질 때 참조가 되어 연결되어진다.
// 때문에 밖에 정의하는 것이 constructor 내부에 함수를 정의 할 경우에 비해 더 효율적으로 자원을 사용한다고 생각하면 됨! 아래 코드 참조해 이해하기

class Test {
    constructor() {
        this.fn = function () {
            console.log("ex");
        };
    }
}

const test1 = new Test("1");
const test11 = new Test("2");

console.log(test1.fn === test11.fn); // false

class Test2 {
    constructor() { }
    fb() {
        console.log("ex");
    }
}

const test2 = new Test2("1");
const test22 = new Test2("2");

console.log(test2.fb === test22.fb); // true









// 13번 몇 번째 행성인가요? ----------------------------------------
const planets = [
    "수성",
    "금성",
    "지구",
    "화성",
    "목성",
    "토성",
    "천왕성",
    "해왕성"
];

const n = prompt("몇번째 행성을 원하나요?");

console.log(planets[n - 1]);










// 14번 3의 배수 인가요? ---------------------------------------

const i = prompt(ß);
if (i % 3 == 0 && i != 0) { // i가 0이면 무조건 0이나오므로 0이 아닐때라는 조건을 추가해준다.
    console.log("짝");
} else {
    console.log(i);
}









// 15번 자기소개. 입력받은 이름 출력 -------------------------------

const name = prompt();
console.log(`안녕하세요. 저는 ${name}입니다.`)









// 16번 입력받은 문자 거꾸로 출력----------------------------------

var str = "거꾸로";

console.log(str.split('').reverse().join(''));

// split() 함수는 문자열을 배열로 반환하는 함수. 매개변수에는 문자열을 넣을 수 있음. 매개변수 문자열에 넣는것을 기준으로 쪼개서 배열로 만들어 전달. 빈 문자열을 넣을경우 문자열을 하나하나 잘라서 배열로 전달
// reverse() 메서드는 배열의 순서를 반전하며, join() 메서드는 원소를 모두 붙여 문자열로 반환한다. join('')와 같이 괄호안에 빈 문자열을 넣어야 연결 되어 출력된다.

const n2 = prompt('입력하세요.');
const reverseString = n2.split('').reverse().join('');

console.log(reverseString);









// 17번 놀이기구 키 제한  -------------------------------------

const height = prompt("키를 입력하세요.");

if (height > 150) {
    console.log('YES');
} else {
    console.log('NO');
}









// 18번 평균 점수 구하기 - 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소수점 자리는 모두 버림 -----------------

const score = prompt().split(' ');
let sum = 0;

for (let i = 0; i < score.length; i++) {
    sum = sum + parseInt(score[i], 10);
    // parseInt 사용해 10진수 정수로 바꿔줌
}
console.log(Math.floor(sum / score.length));
// Math.floor : 주어진 값 이하의 가장 큰 정수를 반환 - 입력값이 음수일 때 주의









// 19번 제곱 구하기  -------------------------------------
const num = prompt().split(' ');
console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));
// pow는 숫자형 문자가 사용가능하지만, 문자형 숫자를 숫자형으로 바꾸는 것이 명확









// 20번 몫과 나머지  -------------------------------------
// 공백으로 구분하여 두 숫자가 주어짐. 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하기.

const num2 = ["7", "2"];

let val1 = Math.floor(parseInt(num2[0], 10) / parseInt(num2[1], 10));
console.log(val1);

let val2 = parseInt(num2[0], 10) % parseInt(num2[1], 10);
console.log(val1, val2);