// 타입 정의
// 간단할때는 type 객체지향 프로그래밍을 할 때에는 interface를 사용
type A = { a: string };
const a: A = { a: 'hello' };

interface B { a: string }
const b: B = { a: 'hello' };

// union(|)
function add(x: string | number, y: string | number): string | number { return x + y }
add(1, 2)
add('1', '2')
add(1, '2')
// 또는 관계이기 때문에 허용 되지만, 타입 추론이 제대로 되지 않음
const result: string = add(2,4);
const result2: string | number = add(2,4);
// result2는 정확히 숫자인데 문자로 착각을 할수도 있게 된다.


// intersection(&)
type A = string & number;
// &는 둘 다를 의미한다.

// &(intersection) - 모든 속성이 다 있어야 한다
type AA = {hello:'world'} & {name:'soo'};
const aaa: AA = { hello:'world', name:'soo'};

// |(union) - 하나의 속성만 있어도 된다.
type BB = {hello:'world'} | {name:'soo'};
const bbb: BB = { hello:'world'};

type A = {
    a: string;
}
type B = {
    b: string;
}

const aa: A | B = { a: 'hello', b: 'world' };
const bb: A & B = { a: 'hello', b: 'world' };

