"use strict";
const a = 5;
const b = '5';
const c = true;
const d = undefined;
const e = null;
const f = '123';
const g = true;
// any를 사용하면 ts를 사용하는 의미가 없어짐
// 타입 자리에 고정된 원시값을 넣는 것도 가능
const h = 5;
const i = true;
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;
function add(x, y) { return x + y; }
const add2 = (x, y) => x + y;
const add3 = (x, y) => x + y;
const add4 = (x, y) => x + y;
// 객체 변수에 타입 지정
const obj = { lat: 37.5, lon: 127.5 };
// 배열
const arr = ['123', '456'];
const arr2 = [123, 456];
const arr3 = [123, 456];
// 꺽쇠 부분은 제네릭이라고 한다.
// 튜플 - 길이가 정해진 배열
const arr4 = [1, 2, '3'];
// 자바스크립트의 변수, 매개변수, 리턴값에 타입을 붙인 것이 타입스크립트!
