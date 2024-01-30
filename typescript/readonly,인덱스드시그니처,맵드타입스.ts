// readonly
interface AAAA {
  readonly a: string;
  b: string;
}
const aaaa: AAAA = { a: 'hello', b:'world'}
// readonly를 사용하면 읽기 전용으로 할당된 값의 변경이 불가능하다.
aaaa.a = '123';


// 인덱스 시그니처 - 한번에 타입 지정
// type BBBB = { a: string, b: string, c: string, d: string }
// 위의 코드처럼 모든 값의 타입이 같은 경우 아래처럼 사용가능
  type BBBB = { [key: string]: string };
  const bbbbb: BBBB = { a: 'hello', b:'world' };


// 키의 타입과 값의 타입을 더 좁히는것도 가능 - 맵드 타입스
type CCC = 'Human' | 'Mammal' | 'Animal'
type DDD = { [key in CCC]:CCC };
const ccc: DDD = { Human: 'Human', Mammal:'Mammal', Animal:'Animal'};
