// 1. return 값이 void인 경우
// void 타입은 리턴값이 존재하면 오류 발생(리턴 없이 사용)
// 리턴 값이 undefined일 경우는 가능.
function ac():void {
  return '3';
}

const bc = ac();


// 2. 매개변수가 void인 경우
// 매개변수가 void인 함수도 return값 존재 가능
function ad(callback:()=>void):void{

}
ad(()=>{
  return '33';
});


// 구현부를 만들기 싫을 때 declare사용
// js파일에서 declare는 사라짐 
declare function forEach(arr: number[], callback: (el: number) => undefined): void;
// undefined를 void로 바꾸면 에러 발생 하지 않음
// 매개변수에서 쓰이는 void는 실제 return값이 무엇이든 간에 상관X

// declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void;
// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
let target: number[] = [];
forEach([1, 2, 3], el => {target.push(el)}); // number일때 오류 발생
forEach([1, 2, 3], el => target.push(el)); // undefined일때 오류 발생

// void는 undefined 안에 대입할 수 없음

// forEach가 다른곳에서 선언되었음이 명확할때 declare사용
// 외부에서 만들어진것들을 타입 선언할때 declare사용
declare let cB: number;

// 3. 메서드로 void 함수가 들어간 경우
// 메서드로 선언할때 void의 역할은 다름
// return값이 undefined가 아닌데도 오류 없음
interface AC {
    talk: () => void;
}
const aC: AC = {
    talk() { return 3; }
}

const bC = aC.talk();
// ts에서 void를 메서드의 타입으로 지정하면 returnr값을 무시하기때문에 bC의 타입이 number가 아닌 void가 됨
// void일 경우 원칙적으로 return을 넣지 않는 것이 맞음
// as unknown as number 를 붙여 강제로 변환 가능하긴 함
// const bC = aC.talk() as unknown as number;
// 꺽쇠를 이용한 강제 변환도 가능
// const bC = <number><unknown>aC.talk();
// as를 사용한 강제변환을 권장! react에서 꺽쇠를 사용하기때문에 헷갈릴 수 있다!

bC.toString();


// 2번과 3번은 리턴 값이 무엇이던 사용하지 않겠다는 의미로 오류가 발생하지 않음