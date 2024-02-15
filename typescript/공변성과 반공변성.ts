// 공변성, 반공변성

function ag(x: string): number {
  return +x;
}
ag('1'); // 1

type Bg = (x: string) => number | string;

// 리턴값은 더 넓은 타입으로 대입이 가능하다. (넓은 타입에서 좁은 타입으로는 대입 불가능)
const bg: Bg = ag;




function mg(x:string | number): number{
  return 0;
}
type hg = (x: string) => number;

// 매개 변수는 좁은 타입으로 대입이 가능
let jg: hg = mg;


