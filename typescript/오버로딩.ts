// 오버로딩 - 같은 타입을 여러번 선언

declare function addadd(x: number, y: number): number
declare function addadd(x: string, y: string): string
declare function addadd(x: number, y: number): number
declare function addadd(x: number, y: number, z: number): number

// declare는 함수의 타입 정의만 하고 실제 코드는 다른곳에 있다고 타입스크립트를 속일 수 있음 따라서 바디 부분을 구현하지 않아도 됨

addadd(1,2);
addadd('1','2');
addadd(2,3,4);

interface AddAdd {
  (x: number, y: number): number;
  (x: string, y: string): string
}

const addadd2: AddAdd = (x: any, y:any) => x + y;

class AAA {
  addadd(x: number, y: number): number;
  addadd(x: string, y: string): string;
  addadd(x: any, y: any) {
    return x = y;
  }
}

const k = new AAA().addadd(1,2);
const v = new AAA().addadd('1','2');