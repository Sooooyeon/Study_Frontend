import React from "react";
import TitleContext from '../context/TitleContext';

function Title(){
    return(    
        <TitleContext.Consumer>
            {(value)=>(<h1>{value}</h1>)}
        </TitleContext.Consumer> 
    );
}
// consumer는 값이 변경이 불가능. 변경되는 값은 provider사용하기
export default Title;