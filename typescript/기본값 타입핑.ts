const abb = (b=3, c=5)=>{
  return '3'
;}

const abb2 = (b: number =3, c: number =5)=>{
  return '3'
;}

// 함수의 매개변수가 기본값이 있는 객체인 경우
const aab = (b = { children: 'soo'}) =>{}

const aab2 = (b:{ children:string} = { children: 'soo'}) =>{}


// 제네릭
const add13 = <T = unknown>(x:T,y:T) => ({x,y});
const add14 = <T extends unknown>(x:T,y:T) => ({x,y});
const add15 = <T,>(x:T,y:T) => ({x,y});