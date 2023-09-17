import React from 'react'
import styled from "styled-components"





const OutputDiv = styled.div`
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1.7rem;

    span {
    font-size: 72px;
    font-family: 'GmarketSansBold';
    vertical-align: middle;
    margin: 1.2rem;    
    }
`;

const BtnGroup = styled.div`
    text-align: center;
    margin-top: -1.2rem;
    .share{
      padding: 2.1rem 4.9rem;
      margin: 8.8rem 0 14.7rem 1.8rem;
      border-radius: 5.6rem;
      background: #FFF;
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.50);
      font-size: 2.4rem;
      font-family: 'GmarketSansBold';
      color: #5B2386;
    }    

`;


export default function Output({hours, outputExpert, setShowModal}) {
  return (
    <div className='output'>
      <OutputDiv><p>당신은<span>{outputExpert}</span>전문가가 되기 위해서</p></OutputDiv>
      <OutputDiv><p>대략<span>{hours}</span>일 이상 훈련하셔야 합니다 :&#41;</p></OutputDiv>         
      <BtnGroup>
        <button  className='btn' type='button' onClick={()=>{setShowModal(true)}}>훈련하러 가기 GO!GO!</button>
        <button  className='share' type='button'>공유하기</button>
      </BtnGroup>
    </div>
  )
}
