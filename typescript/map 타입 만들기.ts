interface Arr<T>{
  forEach(callback:(item:T, index:number)=>void):void;
  map<S>(callback: (v: T) => S): S[];
}

const aaArr: Arr<number> = [1,2,3];
const bbArr = aaArr.map((v) => v + 1 ); // [2,3,4]
const ccArr = aaArr.map((v) => v.toString()); // ['1','2','3']
const ddArr = aaArr.map((v)=> v % 2 === 0); // [false, true, false]

const eeArr: Arr<string> = ['1','2','3'];
const ffArr = eeArr.map((v)=> +v);