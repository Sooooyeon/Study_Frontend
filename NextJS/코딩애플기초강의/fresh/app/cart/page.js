'use client'
// 서버 컴포넌트와 클라이언트 컴포넌트의 차이
// 서버 컴포넌트는 로딩속도가 빠르고 검색엔진 노출에 유리하다는 장점을 가진다.
// 서버 컴포넌트에서는 html에 자바스크립트 기능을 넣을 수 없다. react hook들도 사용 불가능.
// 큰페이지는 서버컴포넌트를 사용하고, JS 기능이 필요한 곳에만 클라이언트 컴포넌트를 사용하는 것을 추천.

import {age, name} from "./data.js"

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem/>
      <CartItem/>
      <CartItem/>
    </div>
  )
} 

function CartItem(){
  return(
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
)
}