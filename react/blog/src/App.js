import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '개발자는 어떻게 공부할까?';
  // 서버에서 가져온 데이터로 가정.
  // 데이터 바인딩 - 변수로 가져온 데이터를 아이디, 클래스명, 요소 내용 등으로 어디서든 사용 가능

  let [글제목, 글제목변경] = useState(['네카라쿠배 가기 위해서는?', '기술 블로그 만들기', '효과적인 학습 방법']);
  // useState(보관할자료)
  // let[작명,작명]

  // distructuring
  // let num = [1, 2];
  // let [a, c] = [1, 2];

  // state를 사용해야하는 이유는?
  // 일반 변수는 변경될 경우 html에 자동으로 반영되지 않는다.
  // state를 쓰던 html은 변동시 자동으로 재렌더딩 된다. -> 자주 변경이 될 것 같은 부분은 state로 만들기

  let [좋아요, 좋아요변경] = useState(0);
  // state변경은 등호가 아니라 함수를 사용 
  // 위 코드의 좋아요변경 함수는 state 변경용 함수 - 이 함수를 사용해야 html 재 렌더링도 잘 됨

  return (
    <div className="App">
      <div className="blackNav">
        <h4 style={{ color: 'gold' }}>Blog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        글제목변경(copy.sort());
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        // 원본배열을 보존하기위해 복사해서 사용
        // 전개구문을 사용해 새로운 메모리 공간에 복사 (가리키는 메모리 영역 화살표가 변경됨) (*전개구문을 사용하지 않으면 화살표가 기존과 같은 메모리 영역을 가리키게 됨 -> state 변경이 되지 않음)
        copy[0] = '공부 방법 공유';
        글제목변경(copy);
      }}>다른 글 보기</button>

      {/* 
        state 변경 함수의 특징
        기존 state == 신규 state 일 경우 변경하지 않음
        글제목[0] = '네카라쿠배 가기 위해서는?';
        글제목변경(글제목);
        위 코드의 경우 글제목에 저장되어 있던 화살표는 바뀐적이 없어
        기존과 신규 데이터 차이가 없음

        array/object 특징
        state가 array/object면 전개구문을 사용해 독립적 카피본을 만들어서 수정해야함
        (복사본을 만들지 않을 경우 같은 화살표가 메모리 영역를 가리킴)
      
      */}

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h4>
        <p>8월 28일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 28일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 28일 발행</p>
      </div>
      <Modal></Modal>
      <Modal />
    </div >
  );
}
/* 
  컴포넌트 만드는 방법
  1. function 만들기 (다른 함수 바깥에 만들기)
  2. return() 안에 html 담기
  3. <함수명></함수명> 쓰기

  컴포넌트 사용하면 좋은 경우
  1. 반복적인 html 축약할 때
  2. 큰 페이지들 만들때
  3. 자주 변경되는 UI 제작할 때

  컴포넌트의 단점
  state 가져다 쓸 때 문제가 생김
  
*/
function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
    // 의미 없는 <div>대신 <></> 사용 가능
  )
}

// let Modal = ()=>{}
// 화살표 함수로 컴포넌트를 만들어도 됨

export default App;
