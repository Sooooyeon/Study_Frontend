// 빈 배열을 조심하기
// 빈 배열은 never 타입으로 뜨는데, never라는 타입이 뜨면 array에는 어떤 타입도 올 수 없다.
// 따라서 빈 배열을 선언할때엔 타입을 지정하기.

try {
  const array = []; 
  array.push('hello');
} catch(error) {
  error;
}
// ** 강의에서는 never로 나왔었는데 현재는 any[]로 나온다..! 업데이트 되면서 바뀐걸지도 모르겠다.**


// 느낌표 사용
// head가 Element | null 이었는데 !를 사용해서 null이 아님을 보증한다. -> 추천하지 않는 방식
const head = document.querySelector('#head')!;
console.log(head);

// 아래처럼 사용을 권장 head가 없으면 false로 실행되지 않음.
const head2 = document.querySelector('#head');
if (head) {
  head.innerHTML = 'hello';
  console.log(head);
}