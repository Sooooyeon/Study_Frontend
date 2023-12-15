// this를 분석할 수 없는 케이스
const header = document.querySelector('.title');
header.addEventListener('click', function(){
  // 함수의 호출이 아닌 선언으로 this를 알 수 없다.
  // 공식문서를 보기 전에는 addEventListener의 this를 알 수 없다.
  console.log(this);
});

// addEventListener 원본 코드 추측
const obj = {
  addEventListener: function(eventNamw, callback){
    callback(); // this가 window -> 잘못된 코드
    callback.call(obj); // this가 obj -> 올바른 코드
    callback.call(this); // this가 obj -> 올바른 코드
    // 내부적으로 addEventListener는 callback.call(obj); 와 같을 것으로 예상
  },
};

obj.method(callback)
// callback의 this가 무엇이 될지는 아무도 모른다.

obj.addEventListener('click', () => {
  // 화살표 함수에서는 call, apply, bind 사용 불가능
  // 화살표 함수를 넣는 순간 addEventListener가 정해주는 값을 따르는 것이 아니라 무조건 부모로 부터 상속. 이 코드의 경우 부모는 anonymous로 this는 window가 됨
  console.log(this);
});


// call, apply, bind
function a(){}

// bind는 this를 바꿔 새로운 함수를 만들어냄 - 별도 호출 필요
a.bind(window)
const b = a.bind(window)
b()

// apply는 this를 바꿔 새로운 함수를 만든 뒤 호출까지 함
a.apply(window)

a.apply(window) === a.bind(window)() === a.call(window)

function add(a,b){
  return a + b
}

add.apply(null, [3,5]); 
// this가 없어서 null, apply는 매개변수를 배열로 넣음

add.call(null, 3, 5);
// call은 매개변수를 순서대로 넣음