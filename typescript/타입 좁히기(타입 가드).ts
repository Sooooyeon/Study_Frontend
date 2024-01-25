function numOrStr(a: number | string) {
  (a as number).toFixed(1);
}
// unknown일때를 제외하고 as는 사용하지 않도록 한다.
numOrStr('235');
// toFixed를 사용하기 위해 숫자로 a 타입 고정해버리면 오류 발생
numOrStr(1);

// if 문을 사용한 타입가드
function numOrStr(a: number | string) {
  if (typeof a === 'number') {
    a.toFixed(1);  
  } else {
    a.charAt(3);
  }
  if (typeof a === 'string'){
    a.charAt(3);
  }
  if(typeof a === 'boolean'){
    a.toString();
    // 위에서 정의한 타입에 boolean이 없어 타입 추론으로 never
  }
}

function numOrStr(a: number | string) {
  if (typeof a === 'string') {
    a.split(',');  
  } else {
    a.toFixed(1);
  }
}

// 또는 타입일때 서로간의 타입을 if문으로 구분
function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) { // number[]
    // Array.isArray로 배열인지 아닌지 구분
    a.slice(1);  
  } else { // number
    a.toFixed(1);
  }
}
numOrNumArr(123);
numOrNumArr(1,2,3);


// 인스턴스의 타입핑은 클래스 이름으로 한다.
class AH {
  aaa(){}
}
class BH {
  bbb(){}
}
function aOrB(param: AH | BH){
  if(param instanceof AH){
    param.aaa()
  }
}
aOrB(new AH());
aOrB(AH); // 바로 넣으면 오류 발생 new를 붙인 인스턴스를 넣어줘야함
aOrB(new BH());


type BG = { type: 'b', bbb: string };
type CG = { type: 'c', ccc: string };
type DG = { type: 'd', ddd: string };

// 같은 속성의 값으로 타입 구분
function typeCheck(a: BG | CG | DG) {
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}

// 속성으로 타입 구분
function typeCheck(a: BG | CG | DG) {
  if ('bbb' in a) {
    a.bbb;
  } else if ('ccc' in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}

// 쉽게 찾아낼 수 있도록 객체에 타입을 달아두면 좋음
const human = { type: 'human'};
const dog = { type: 'dog'};
const cat = { type: 'cat'};

if( a.type === 'human'){

};

// 위와 같은 경우가 아니라면 아래와 같은 방식으로도 사용
const human2 = { talk() };
const dog2 = { bow() };
const cat2 = { meow() };

if('talk' in a){
  a
}