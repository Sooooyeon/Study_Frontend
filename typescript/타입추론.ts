// 변수명에 마우스 커서를 올려보면 타입 추론이 잘 되고있는 것을 확인할 수 있음
// 타입 추론이 잘 되고 있는 변수에 굳이 타입을 또 명시할 필요가 없음.
const a1 = 5;
const b1 = '5';
const c1 = true;
const d1 = undefined;
const e1 = null;

// return 타입을 생략해도 정확할 경우 타입을 추론, 매개변수는 타입 명시 필요
function add5(x: number, y: number) { return x + y }
const result = add5(1, 2);

// 배열의 경우 한가지 타입만 배열에 담겨있어 정확히 추론해 일치하면 타입 명시 생략 가능.
const arr5 = ['123', '456'];
const arr6 = [123, 456];
const arr7: [number, number, string] = [1,2,'3'] // 타입 명시 생략할 경우 두가지 타입으로 나옴.

// 객체
const obj2 = { lat: 37.5, lon: 127.5 };


// !! 추론이 잘 되면 추론에 맡겨라 !! 타입은 최대한 좁게 명시하라 !!
