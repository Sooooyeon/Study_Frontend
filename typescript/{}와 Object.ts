// {} (빈 객체 타입) 과 Object
// {}과 Object는 객체가 아닌 모든 타입 (null과 undefined 제외)
// 실제 객체는 소문자 o 사용한 object

const x: {} = 'soo';
const y: Object = 'hello';
const xx: object = 'hello'; // 객체가 아닌 문자열 대입으로 오류 발생
const yy: object = { hello: 'world'}; 
// 객체를 타입핑할때는 object 사용을 지양하고, 
// interface, type, class 등의 더 구체적인 타입을 사용해 타입핑하기.
const z: unknown = 'hello'

// unknown과 any 모두 모든 타입 사용이 가능하나 any는 타입 추론을 포기. unknown은 나중에 지정. unknown사용을 권장
// unknown = {} | null | undefined
if(z){
  z; 
  // null과 undefined는 if문 안으로 들어올 수 없기때문에 unknown에서 걸러지고,
  // z의 타입은 모든 타입을 의미하는 {}가 됨
} else {
  z;
}
