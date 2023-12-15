console.log(this) // window
// this는 기본적으로 window이다.

function a(){
  console.log(this);
}
a(); // window (함수에서도 this는 window)

function b(){
  'use strict'
  console.log(this);
}
b(); // undefined strict 모드 적용시 this는 undefined

// js 의 this - window, globalThis
// node 의 this - global, globalThis

// this가 바뀌는 경우
// 1. 앞에 객체가 붙는 경우 (객체의 메서드를 호출하는 경우)
const obj = {
  name : 'zerocho',
  sayName(){
    console.log(this.name);
  }
  /*
  아래와 같이 표현된 것을 위 처럼 줄여서 사용할 수 있으나 완벽하게 같지는 않다.
  (속성이 다르다.)
  sayName: function(){
    console.log(this.name);
  }

  화살표 함수일 경우 this는 부모 scope를 가리킴 
  sayName: () => {
    console.log(this.name);
  }
  obj.sayName() // '' === window.name


  const obj = {
    name : 'zerocho',
    sayName(){
      console.log(this.name);
      const inner = () => {
        console.log(this.name);
      }
      inner(); // 화살표 함수는 부모의 this를 따라가 this는 zerocho
    }
  }
  obj.sayName();
  // zerocho
  // zerocho

  // 아래는 화살표 함수가 아닌 경우
  const obj = {
    name : 'zerocho',
    sayName(){
      console.log(this.name);
      fucntion inner(){
        console.log(this.name);
      }
      inner(); // 함수 호출시 this를 바꿔주는 동작을 하지 않아서 this는 window
    }
  }
  obj.sayName();
  // zerocho
  // ''

  
  */

};

obj.sayName() //zerocho
// 앞에 객체가 붙는 경우 this가 변함 (화살표 함수일때는 변하지 않음)

//console.log(window.name); // ''

const sayN = obj.sayName;
sayN() // ''
// this가 무조건 해당 객체를 가리키는 것은 아님
// this는 함수가 호출될 때 결정됨


// 2. 생성자 함수로 만든 객체
function Human(name){
  this.name = name;
}
new Human('sooyeon')
// 생성자 함수를 통해 객체를 만들 때 this는 객체 자기 자신

function sayName(){
  console.log(this.name);
}
sayName();
// 함수에서의 this는 window 따라서 window.name === ''

// this를 직접 바꿔주는 방법 - bind / call / apply 사용
// bind - 새로운 함수를 만든다. (따로 호출이 필요)
sayName.bind({name:'sooyeon'})()

// apply - 새로운 함수를 만들어 호출까지 함. (따로 호출 필요 없음)
sayName.apply({name:'sooyeon'})

// call - apply와 유사
sayName.call({name:'sooyeon'})

// this는 함수를 호출할 때 결정 됨
