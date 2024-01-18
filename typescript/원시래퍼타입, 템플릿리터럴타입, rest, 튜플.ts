// string과 String은 다름
const a3: string = 'hello';
const b3: String = 'hell'; // string 대문자로 사용하면 래퍼 객체. 소문자로 사용하기.

// 템플릿 리터럴 타입이 존재
type World = "world" | "hell";
// world 또는 hell 만 가능함을 명시

// type Greeting = "hello world"
type Greeting = `hello ${World}`;
const c3 :Greeting = 'hello hell'
const d3 :Greeting = 'hello world'

// rest
let arr8: string[] = [];
let arr9: Array<string> = [];
function rest(a, ...args: string[]) {
  console.log(a, args); // '1',['2','3']
}

rest('1','2','3');


// 튜플
const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello'; // 길이가 정해져 있어 3번째 요소 추가를 하려고하니 오류 발생.
tuple.push('hello'); // 이렇게는 추가가 가능한.. 사소한 단점이 있음.