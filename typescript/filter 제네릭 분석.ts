interface Array<T>{
  filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
}


const filtered = [1,2,3,4,5].filter((item)=>item % 2);
const filtered2 = ['1',2,'3',4,'5'].filter((item)=> typeof item === 'string' );

const predicate =(value: string | number):value is string => typeof value === 'string' 
const filtered3 = ['1',2,'3',4,'5'].filter(predicate);
// 