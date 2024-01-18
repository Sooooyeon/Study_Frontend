// enum - 처음에 명시 하지 않을 경우 순서대로 숫자가 부여됨 0, 1, 2, 3
// enum은 주로 변수들을 하나의 그룹으로 묶고싶을 때 사용
const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
const a4 = EDirection.Up; // 0

// 숫자 또는 문자로 지정 가능
// ** 처음 값만 숫자로 지정했을 경우 다음 값은 차례로 + 1 됨
// const enum EDirection {
//   Up = 3,
//   Down = 4,
//   Left = 5,
//   Right = 'a',
// }

// as const 를 붙여 상수처럼 사용하겠다고 명시
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// js파일에 남기고 싶지 않으면 enum, 남기고 싶으면 객체로 사용하기.

EDirection.Up;

(enum member) EDirection.Up = 0

ODirection.Up;

(property) Up: 0


// enum은 직접 타입으로 사용 가능
// Using the enum as a parameter
function walk(dir: EDirection) {}

walk(EDirection.Left);

// as const를 붙여야 엄격하게 타입핑해서 value값이 정확히 명시됨
const obj3  = {a:'123', b: 'hello', c:'world'} as const;
type Key = keyof typeof obj3;
type Value = typeof obj3[keyof typeof obj3];

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

run(ODirection.Right);