import {useContext} from "react";
import LangContext from '../context/LangContext';

function Button(){
    const {lang,setLang} = useContext(LangContext);
    
    const toggleLang= ()=>{
        setLang(!lang);
        console.log(lang);
    };

    return(
    
        <button onClick={toggleLang}>{lang}change lang</button>
    )
    
}
        

export default Button;