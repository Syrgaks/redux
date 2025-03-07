import React from 'react'
import './cart.css'
import { useSelector } from 'react-redux'


function Cart() {
const {cartItem} = useSelector( ( state ) => state.flover )
  
  return (
    
      <div className='card container'>
      <div className="basket">
        {
          cartItem.map( ( item ) => (
      <div className="card-product">
        <div className="card-block">
          <img src={ item.imageUrl }  className='cardImg'/>
           <p> { item.title } </p>          
        </div>
        <p> {item.price } </p>
        <input type='text' />
        <p> { item.viewsCount } </p>
      </div>
     ))
     }
      </div>
      </div>
  )
}

export default Cart
