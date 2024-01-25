interface AX{
  talk: () => void;
}
const ax: AX = {
  talk() {return 3;}
}
// const b: any = a.talk();
const bv: unknown = ax.talk();
bv.method(); // 오류 발생
(bv as AX).talk();


// any를 사용한 이후로 ts가 타입 체크를 포기함.
// unknown을 사용하면 타입을 직접 지정해줘야 함.
// unknown은 지금 당장 타입을 모를 때 사용. - 나중에 타입 정의 (any와는 다름)


// try catch문에서 error는 unknown
try {

} catch(error){
  error.message
}

// unknown이므로 타입 지정해 사용
try {

} catch(error){
  (error as Error).message
}

const bx = ax.talk() as unknown as number;
// as unknown as 가 없으면 오류 발생하나 js 파일로 변환은 가능
bx.toString();