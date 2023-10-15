import Input from "./components/Input";
import Output from "./components/Output";
import Modal from "./components/Modal"
import {useState} from 'react';
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import "./img/quotes.svg";



const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: bold;
    font-style: bold;
}

@font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

    
${reset}

a{
    text-decoration : none;
    color : inherit;
}
p{

}
button{
    border : none;
    cursor : pointer;
}

input{
  border: none;
}

* {
box-sizing: border-box;
}

html {font-size:62.5%}
body {
  background-color: #5B2386;
  font-family: 'GmarketSansMedium';
}
.wrap{
  max-width: 192rem;
  color: #fff;
}
.logo{
  width: 56.4rem;
  height: 11.2rem;
  margin: 19.4rem auto 12.5rem;
  position: relative;
}
.logo .clock{
  position: absolute;
  width: 22.2rem;
  height: 22.5rem;
  left: 50%;
  top: -50%;
  transform: translate(-50%,0);
}
.logo .frame{
  width: 56.4rem;
  height: 11.2rem;
}
.wiseSaying{
  font-family: 'OTEnjoystoriesBA';
  color: #F5DF4D;
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 7.6rem;
}

.hoursLaw{
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 10.2rem;
  line-height: 1.7;
  position: relative;
}

/* .hoursLaw::after{
  content: '';
  background-image: url("./img/quotes.svg");
  position: absolute;
  display: block;
} */

.hoursLaw span{
  font-size: 2.4rem;
  line-height: 1.7;
  font-family: 'GmarketSansBold';

}

.quotes{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -22%);
}

`




function App() {

  const [expert, setExpert] = useState('');
  const [hours, setHours] = useState("");
  const [outputExpert, setOutputExpert] = useState('');
  const [showModal, setShowModal] = useState(false);

  
  return (
    <>
      <GlobalStyle/>
      <div className="wrap">
          <h1 className="logo">
            <img className="clock" src={require("./img/clock.svg").default} alt="시계" />
            <img className="frame" src={require("./img/Frame.svg").default} alt="1만 시간의 법칙" />
          </h1>
          <p className="wiseSaying">“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</p>
          <p className="hoursLaw"><img className="quotes" src={require("./img/quotes.svg").default} alt="1만 시간의 법칙" /><span>1만 시간의 법칙</span>은<br/>어떤 분야의 전문가가 되기 위해서는<br/>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
          

          <Input expert={expert} setExpert={setExpert} hours={hours} setHours={setHours} setOutputExpert={setOutputExpert} />
          {hours ? <Output hours={hours} outputExpert={outputExpert} setShowModal={setShowModal} /> : null}
          {showModal ? <Modal setShowModal={setShowModal} /> : null}
          
      </div>
    </>
  );
}
export default App;
