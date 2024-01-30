// 옵셔널 - 물음표 사용, 있어도 되고 없어도 된다.
// ?의 위치는 속성명 뒤
function bdc(a: number, b?: number, c?: number) {}
bdc(1)
bdc(1, 2)
bdc(1, 2, 3)
bdc(1, 2, 3, 4) // 4번째는 없어서 오류

// 전부 다 받고싶은 경우 아래처럼 사용할 수 있다.
function cdf(...args:number[]){}
cdf(1)
cdf(1, 2)
cdf(1, 2, 3)
cdf(1, 2, 3, 4) 

// optional은 타입이나 인터페이스에서도 사용가능.
let obj11: { a: string, b?: string }  = { a: 'hello', b: 'world' }
obj11 = { a: 'hello' };



// 제네릭
// 제네릭이 필요한 이유는?
function add (x: string|number, y: string|number): string| number {return x + y};
/*
  위의 함수에서 
  a(1,2) // 3
  a('1','2') // 12

  a('1',2) // 12
  a(1,'2') // 12
  문자와 숫자를 더하는 경우때문에 문제 발생
  
*/ 

// 위의 문제를 해결하기 위해 숫자는 숫자, 문자는 문자끼리만 더해서 결과를 출력하고 싶어 아래와 같이 시도
function add (x: string, y: string): string;
function add (x: number, y: number): number;
function add (x: string | number, y: string | number){
  return x + y;
}
function add (x, y){
  return x + y;
}
// 계속 오류가 발생하는 문제가 있음

// 제네릭 사용 - 타입을 변수처럼 만든다.(같은 타입은 하나의 문자로 표현)
// 실제로 사용할 때 타입이 정해진다.
// T의 타입을 지정할 수 있음

function add11<T extends number | string>(x: T, y: T): T { return x + y }
// ts는 T가 무엇인지 확실하게 몰라서 오류가 발생하고있음.

add11<number>(1, 2);
add11(1, 2);
add11<string>('1', '2');
add11('1', '2');
add11(1, '2'); // 같은 타입을 사용한게 아니어서 오류 발생


// 제네릭을 여러개 만들면서 각각 다른 제한을 두는 것도 가능.
function add12<T extends number, K extends string>(x: T, y: 
  K): T { return x + y }
// ts는 T가 무엇인지 확실하게 몰라서 오류가 발생하고있음.

add12(1, 2);
add12('1', '2');
add12(1, '2');


// 제네릭에서는 extends를 통해 타입을 제한
function add<T extends string>(x: T, y: T): T { return x + y }
add(1, 2);
add('1', '2')


// 각종 제한 방법

// 특정 객체
// <T extends {...}>
// function add<T extends { a : string }>(x: T): T { return x };
// add({a:'hello'})

// <T extends any[]> // 모든 배열
// string 배열
// function add<T extends string[]>(x: T): T { return x };
// add(['1','2','3'])

// <T extends (...args: any) => any> // 모든 함수

// 콜백함수
// function add<T extends (a: string) => number>(x: T): T { return x };
// add( (a) => +a )

// <T extends abstract new (...args: any) => any> // 생성자 타입
// function add<T extends abstract new (...args: any) => any>(x: T): T { return x };
// class A{}
// add(A)

// <T extends keyof any> // string | number | symbol