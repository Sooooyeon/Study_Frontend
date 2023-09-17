import React from 'react';
import {useState} from 'react';
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"



const GlobalStyle = createGlobalStyle`
.input{
  max-width: 192rem;
  height: 100%;
  margin: 0 auto;
}

.input form{
  text-align: center;
}

.btn{
  padding: 2.1rem 4.9rem;
  margin: 8.8rem 0 14.7rem;
  border-radius: 5.6rem;
  background: #FCEE21;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.50);
  font-size: 2.4rem;
  font-family: 'GmarketSansBold';
  color: #5B2386;
}

`

const InputDiv = styled.div`
    font-size: 2.4rem;
    input {
      width: 22.8rem;
      height: 5.7rem;
      margin:0 1.7rem 2.7rem;
      border-radius: 0.7rem;
      font-size: 2.4rem;
      font-family: 'GmarketSansMedium';
      padding-left: 2rem;
    }
    input::placeholder{
      color: #BABCBE;
      /* text-align: center; */
    }
`;



export default function Input({expert, setExpert, hours, setHours, setOutputExpert}) {

  const [trainingHours, setTrainingHours] = useState('');

  const handleInputExpert = (e) => {
    setExpert(e.target.value)
  }


  const handleInputHours = (e) => {
    setTrainingHours(e.target.value)
  }

  const calculator =(e)=>{
    e.preventDefault();
    if(expert!=="" && hours!==0){
    setHours(Math.floor(10000 / trainingHours));
    setOutputExpert(expert);

    } else{
      alert('입력되지 않았습니다!');
    }
    
  }


  return (
    <>
    <GlobalStyle/>
    <div className='input'>
      <form onSubmit={calculator}>
        <InputDiv>나는<input type='text' onChange={handleInputExpert} placeholder='예)프로그래밍' />전문가가 될 것이다.</InputDiv>
        <InputDiv>그래서 앞으로 매일 하루에<input type='number' onChange={handleInputHours} placeholder='예)5' />시간씩 훈련할 것이다.</InputDiv>
        <button className='btn'>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
      </form>
    </div>
    </>
  )
}
