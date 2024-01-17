// Type 유형

const a: number = 5;
const b: string = '5';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = '123';
const g: any = true;
// any를 사용하면 ts를 사용하는 의미가 없어짐

// 타입 자리에 고정된 원시값을 넣는 것도 가능
const h: 6 = 6;
const i: true = true;

// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;

function add(x: number, y: number): number { return x + y }

const add2: (x: number, y: number) => number = (x, y) => x + y;

// type으로 타입을 선언하는 방식 - 타입 애일리어스 (Type Alias)
type Add3 = (x: number, y: number) => number;
const add3: Add3 = (x, y) => x + y;

// interface를 통해 함수의 Type을 정의해서 만드는 방식도 있음
interface Add {
  (x: number, y: number) : number;
}
const add4: Add = (x, y) => x + y;

// 객체 변수에 타입 지정
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

// 배열
const arr: string[] = ['123', '456'];
const arr2: number[] = [123, 456];
const arr3: Array<number> = [123, 456];
// 꺽쇠 부분은 제네릭이라고 한다.

// 튜플 - 길이가 정해진 배열
const arr4: [number, number, string] = [1,2,'3']


// 자바스크립트의 변수, 매개변수, 리턴값에 타입을 붙인 것이 타입스크립트!