import {useState} from 'react';
import './App.css';
import LangContext from './context/LangContext';
import TitleContext from './context/TitleContext';
import Content from './components/Content';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  const [lang,setLang] = useState(true);
  return (
    <TitleContext.Provider value={'언어를 변경합니다.'}>
      <LangContext.Provider value={{lang, setLang}}>
        <Title />
        <Content />
        <Button />
      </LangContext.Provider>
    </TitleContext.Provider>
  );
}

export default App;
