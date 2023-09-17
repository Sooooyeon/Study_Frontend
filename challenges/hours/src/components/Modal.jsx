import React from 'react'
import { createGlobalStyle } from "styled-components"



const GlobalStyle = createGlobalStyle`
    .modalBg{
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal{
        width: 600px;
        height: 600px;
        border-radius: 30px;
        background: #FFF;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.50);
        color:#5B2386;
        font-family: 'OTEnjoystoriesBA';
        text-align: center;
        padding-top: 3.6rem;

    }

    .modal h2{
        font-size: 9.6rem;
    }

    .modal p{
        margin: 0.4rem 0 0;
        font-size: 3.6rem;
    }

    .modal img{
        width: 34rem;
        margin-bottom: 3.4rem;
    }
    .closeBtn{
        display: block;
        padding: 2.1rem 4.9rem;
        margin: 0 auto;
        border-radius: 5.6rem;
        background: #FCEE21;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.50);
        font-size: 2.4rem;
        font-family: 'GmarketSansBold';
        color: #5B2386;
    }
`


    
    


export default function Modal({setShowModal}) {
    return (
        <>
            <GlobalStyle/>
            <div className='modalBg'>
                <div className='modal'>
                    <h2>화이팅!!♥︎♥︎♥︎</h2>
                    <p>당신의 꿈을 응원합니다!</p>
                    <img src={require("../img/licat.svg").default} alt="라이캣" />
                    <button className='closeBtn' onClick={()=>{setShowModal(false)}}>종료하고 진짜 훈련하러 가기 GO!GO!</button>
                </div>
            </div>
        </>
    )
}
