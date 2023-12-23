
const x = 'x1';
console.log(z);
var y = 'haha';
const z = () => {};

function c() {
  const y = 'y';
  console.log('c');

  function b(){
    const z = 'z';
    console.log('b');
    c();
  }
}

function a() {
  console.log('a');
  b();
  console.log(x); 
  /*
  TDZ(Temporal Dead Zone) 코드
  const 와 let 의 경우 선언하기 전에 변수에 접근하면 TDZ으로 참조 불가능.
  */
  const x = 'x2';

}

a(); // a
c(); // c b 

function s(){
  console(o);
}
const o = 'o';
s() // o
// 위의 코드에서 o가 선언되기 전에 s함수가 실행되면 에러 발생

/* 
호이스팅이 발생하지 않도록 코드를 작성하는 것이 더 좋으나 
레거시 코드에서 어쩔 수 없이 호이스팅이 발생하는 경우 아래 코드와 같이 var와 function을 상단으로 끌어올려 실행된다.
var은 중복 선언이 가능해 혼란을 야기할 수 있다. 

ex)
var y;
function c() {
  const y = 'y';
  console.log('c');

  function b(){
    const z = 'z';
    console.log('b');
    c();
  }
}

function a() {
  console.log('a');
  b();
  console.log(x); 
  const x = 'x2';

}
console.log(z);
const x = 'x1';
y = 'haha';


// 위의 코드들은 z에 대해서 TDZ
const z = () => {};

a(); 
c();

*/

