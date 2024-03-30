interface Profile {
  name: string,
  age: number,
  married: boolean,
}

const sooyeon: Profile = {
  name: 'soo',
  age: 29,
  married: false,
}

// 매번 같은 객체를 새로 만들지 않고 Partial 키워드를 사용하면 타입을 옵셔널로 만들 수 있음
const newSooyeon: Partial<Profile> = {
  name: 'soo',
  age: 29,
}

// 직접 만들어보기
type Name = Profile['name'];

type Pr<T> = {
  // [Key: string]:string;
  [Key in keyof T]?: T[Key];
}

/*
Pr<Profile>
{
  name?: string,
  age?: number,
  married?: boolean,
}

*/
const newSooyeon2: Pr<Profile> = {
  name: 'soo',
  age: 29,
}