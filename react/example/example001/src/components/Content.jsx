import React from "react";
import {useContext} from "react";
import LangContext from '../context/LangContext';

function Content(){

    const {lang} = useContext(LangContext);

    return(     
        <div>
            {lang=== true ? "안녕하세요":"hello"
            }
            </div>
    );
}
export default Content;