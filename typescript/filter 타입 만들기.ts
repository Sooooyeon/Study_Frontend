interface Arr<T> {
  filter<S extends T>(callback: (v:T)=> v is S): S[];

}
const uu: Arr<number> = [1,2,3];
const ii = uu.filter((v): v is number => v % 2 === 0); // [2] number[]
const pp: Arr<number|string> = [1,'2',3,'4',5];
const oo = pp.filter((v): v is string => typeof v === 'string'); // ['2','4'] string[]
const hh = pp.filter((v): v is number => typeof v === 'number'); // [1,3,5] number[]

const predicate2 = (v: string | number): v is number => typeof v === 'number';

const kk = pp.filter(predicate2); // [1,3,5] number[]