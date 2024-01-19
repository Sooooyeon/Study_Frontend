// 타입 상속
type Animal = { breath: true };
type Mammalia = Animal & { breed:true };
type Human = Mammalia & { think: true };

const soo: Human = { breath: true, breed: true, think: true};



// 인터페이스 상속
interface AAA {
  breath: true
}
interface BBB extends AAA {
  breed: true
}

const bbbb: BBB = { breath:true, breed:true };

// interface는 여러번 선언 가능하고, 합쳐지는 특성이 있음.
interface A4 { a: string }
interface A4 { b: string }
const obj1: A4 = { a: 'hello', b: 'world' }

// type은 오류 발생
type B4 = { a0: string }
type B4 = { b0: string }
const obj2: B4 = { a0: 'hello', b0: 'world' }