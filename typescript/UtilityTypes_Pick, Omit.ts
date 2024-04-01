interface Profile2 {
  name: string,
  age: number,
  married: boolean,
}

const sooyeon2: Profile2 = {
  name: 'soo',
  age: 29,
  married: false,
}


type Name2 = Profile['name'];

// Pick 직접 만들기
type Pr10<T,S extends keyof T> = {
  [Key in S]: T[Key];
}

// Pick을 사용하면 선택해서 가져올 수 있음
const newSooyeon10: Pick<Profile2, 'name'|'age'> = {
  name: 'soo',
  age: 29,
}

// Omit을 사용하면 선택한 것을 제외하고 가져올 수 있음
const newSooyeon11: Omit<Profile2, 'married'> = {
  name: 'soo',
  age: 29,
}

