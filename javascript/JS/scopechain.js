const x = 'x';

function c() {
  const y = 'y';
  console.log('c');

  function b(){
    const z = 'z';
    console.log('b');
  }
}

function a() {
  const x = 'x';
  console.log('a');

  b();
  // b로 접근 불가능
}

a(); // a
c(); // c b 

// 최상위에 있는 함수 a,c는 부모가 anonymous
// 함수 b -> 함수 c -> anonymous
// 스코프는 변경될 수 없음

// 렉시컬 스코프 
// 중첩된 함수 그룹에서 내부 함수가 상위 범위의 변수 및 기타 리소스에 엑세스 가능함을 의미. 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정. 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정됨. 정적 스코프라고도 불림

// 예제 코드
var a =1;

function foo(){
  var a = 10;
  bar();
}

function bar(){
  console.log(a);
}

foo(); // 1
bar(); // 1


// if, for, while, switch 등은 함수가 아닌 블록
// 자바스크립트에서 중괄호만 있을경우 블록, 객체를 중괄호로 표현할때는 소괄호로 감싸줘야함

// const a = () => { }
// -> 객체를 리턴하는 함수가 아니라 블록
// 객체로 만드려면 소괄호로 감싸기
// -> const a = () => ({})