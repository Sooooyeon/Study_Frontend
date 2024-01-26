// 타입을 구분해주는 커스텀 함수를 직접 만들 수 있다.
// return갑에 is가 들어있는 것들은 커스텁 타입 가드 함수이다.
// 커스텀 타입 가드 함수는 if문 안에 쓴다. if문 안에 써서 정확한 타입이 무엇인지 알려준다.
// 타입 판별하는 것은 직접 작성해야한다.
interface Cat { meow: number }
interface Dog { bow: number }
function catOrDog(a: Cat | Dog): a is Dog {
  // 타입 판별을 직접 만든다
  if ((a as Cat).meow) { return false }
  return true;
}

function pet (a: Cat | Dog ) {
  if (catOrDog(a)) {
    console.log(a.bow);
  }
  if ('meow' in a) {
    console.log(a.meow);
  }
}


const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => { 
  return input.status === 'rejected';
}
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled';
}

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected);
// 필터에 타입가드를 넣어 사용

export{}