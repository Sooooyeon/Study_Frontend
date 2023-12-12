const add = (a,b) => a + b;
// { a + b } 일 경우 객체를 return, return 값을 명시하지 않으면 undefind

function calculator(func,a,b){
  return func(a,b);
}

add(3,5)
console.log(add(3,5))

calculator(add,3,5);
// calculator(add(),3,5); 올바르지 못한 코드
// calculator(undefined+undefined,3,5);

document.querySelector('#header').addEventListener('click',add());
// 함수 호출이 보이면 return 값이 들어갔다고 생각하기
// document.querySelector('#header').addEventListener('click', undefined + undefined);


const onClick = () => (event) => {
  console.log('hello');
};
document.querySelector('#header').addEventListener('click', onClick())
// 위와 같은 경우 return 값이 함수로 존재하는 올바른 코드