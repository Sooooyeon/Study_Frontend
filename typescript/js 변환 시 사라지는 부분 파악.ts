// 타입 자리를 외우고, 타입이 없을 때 완벽한 Js코드가 되도록 코드를 작성해야 한다.
function add6(x: number, y: number) { return x + y }


// 콜론 뒷 부분, 타입, 인터페이스, 제네릭은 자바스크립트로 변환할 때 전부 다 사라짐. 없어도 동작하게 만들어야 함.
const a2:true = true;
// const a2 = true;
type Add4 = () => number;
interface Minus { }
Array<string>

// 아래와 같이 사용도 가능. (타입만 나와있고 선언을 추가로 하는 경우)
function add7(x: number, y: number):number;
function add7(x, y){
  return x + y;
}

// as라는 키워드로 앞의 타입을 강제로 바꾸는것이 가능 js로 바꿨을때 as unknown as number는 사라짐
let aa = 123;
aa = 'hello' as unknown as number;