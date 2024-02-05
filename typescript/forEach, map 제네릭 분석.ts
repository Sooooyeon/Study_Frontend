// 선언할때는 뭐가 올지 몰라서 T라는 타입으로 두고 실제 사용시 T가 정해짐
interface Array<T>{
  forEach(callbackfn:(value:T,index: number, array:T[])=> void, thisArg?:any):void;
  map<U>(callbackfn:(value:T,index: number, array:T[])=> U, thisArg?:any): U[];
  // map<U>(callbackfn, thisArg): U[]; 위의 코드와 같다고 생각하면 이해가 쉬움
  // callbackfn의 리턴값의 타입이 U
}

// 제네릭 덕분에 타입 추론이 가능
const p: Array<number> = [1,2,3];
p.forEach((value)=>{console.log(value);});
[1, 2, 3].forEach((value)=>{console.log(value);});
['1', '2', '3'].forEach((value)=>{console.log(value);});
[123, '2', true].forEach((value)=>{console.log(value);});


const strings = [1,2,3].map((item)=>item.toString());