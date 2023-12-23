/*
promise - 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
then을 붙이면 결과를 반환함(나중에 결괏값을 사용할 수 있음)
실행이 완료되지 않았으면 완료된 후에 then 내부 함수가 실행됨

reslove(성공리턴값) -> then으로 연결
reject(실패리턴값) -> catch로 연결
finally 부분은 무조건 실행됨
*/


const condition = true;
const promise = new Promise((resolve, reject)=>{
  if(condition){
    resolve('성공');
  } else {
    reject('실패');
  }
});

// callback 함수를 사용할 때와 다르게 다른 코드가 들어갈 수 있음
promise
  .then((message)=>{
    console.log(message);
    // 다른 코드 추가 가능
  })
  .catch((error)=>{
    console.error(error);
  })  


// promise를 사용해 나중에 결괏값을 사용하는 예시
const p1 = axios.get('서버주소1')
const p2 = axios.get('서버주소2')
const p3 = axios.get('서버주소3')
const p4 = axios.get('서버주소4')
const p5 = axios.get('서버주소5')
const p6 = axios.get('서버주소6')

Promise.all([p1,p2,p3,p4,p5,p6]).then((results)=>{}).catch((error)=>{});
// Promise.all의 단점 - 하나라도 실패하면 catch문이 실행됨
Promise.allSettled([p1,p2,p3,p4,p5,p6]).then((results)=>{}).catch((error)=>{}).finally(()=>{});
// allSettled를 사용하면 어떤 부분에서 통신이 실패했는지 알 수 있음 (result에 기록됨). 실패한 것만 필터링해서 다시 시도
try {} catch (err){} finally{}
// then에서 에러가 발생해도 catch에서 걸림

function findAndSaveUser(Users){
  Users.findOne({})
  .then((user)=>{
    user.name = 'soo';
    return user.save();
  })
  .then((user)=>{
    return Users.findOne({gender:'m'});
  })
  .then((user)=>{
    // 생략
  })
  .catch((error)=>{
    // 생략
  })
}

// 위의 코드에서 async/await을 사용하면 아래와 같다.

async function fundAndSaveUser(Users){
  let user = await Users.findOne({});
  user.name = 'soo';
  user = await user.save();
  user = await Users.findOne({gender:'m'});
  // 생략
}

// 예전에는 async 함수 내부에서만 await을 사용할 수 있었으나 현재는 async 없이 await만 사용 가능 (탑 레벨 awaits)
const promise = new Promise(...)

promise.then((result)=> ... )

const result = await promise;

// async 함수에서 return한 값은 무조건 then으로 받아야 한다.
async function main(){
  // try/catch문을 사용한 에러처리 필요
  try {
  const result = await promise;
  return 'soo';
  } catch(error){
    console.error(error);
  }
}
main().then((name)=>...)
// 혹은 아래처럼 사용 가능
const name = await main()


// for await(변수 of 프로미스배열)
// for await of 문을 사용하면 반복문을 돌리면서 모두 then이 붙어서 나옴 (resolve된 프로미스가 변수에 담겨 나옴)
// await을 사용하기 때문에 async함수 안에서 사용해야 함
// promise를 반복할때 많이 사용됨
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async()=>{
  for await (promise of [promise1, promise2]){
    console.log(promise);
  }
})();