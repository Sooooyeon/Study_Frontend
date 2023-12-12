import React, { useCallback } from 'react'

export const App = () => {
  const onClick = useCallback((e)=>{
    console.log(e.target);
  },[])

  return (
    <div onClick={onClick}></div>
    // <div onClick={onClick()}></div> 올바르지 못한 코드
    // <div onClick={(e)=>console.log(e.target)}></div>
    // <div onClick={undefind}></div>
    // 이 경우 고차함수 const onClick = useCallback(()=>(e)=>{console.log(e.target);},[]) 이면 올바른 코드가 됨
  )
}
