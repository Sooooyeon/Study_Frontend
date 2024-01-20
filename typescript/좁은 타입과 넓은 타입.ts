type A = string | number;
type B = string;
type C = string & number;

// A가 B보다 넓은 타입.
// 좁은 타입에서 넓은 타입으로 대입이 가능. 
// C는 B보다 좁은 타입.

type F = { name : string };
type G = { age : number };
type FG = F | G;
// type D = { name : string, age: number};
// type D = F & G 는 type D = { name : string, age: number}; 와 같다.
type D = F & G // { name: 'soo', age:10 }
// 위의 경우 D보다 A,B가 넓은 타입

const ab: FG = { name: 'soo'};
// const dd: D = { name: 'soo', age:10 };
// const dd: D = ab 오류 발생 (ab가 더 넓은 타입) 

// const dd: D = { name: 'soo', age:10, married: false };
// 특수케이스로 객체리터럴을 바로 넣으면 잉여속성 검사를 추가로 진행해 에러 발생
// 변수로 만들어서 빼주면 오류가 해결됨
const obj4 = { name: 'soo', age:10, married: false };
const dd: D = obj4