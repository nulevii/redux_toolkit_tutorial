import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../CartItem'
import { openModal } from '../../redux/features/modal/modalSlice'

function CartContainer() {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector(state => state.cart)

  const onClear = () => {
    dispatch(openModal())
  }

  const roundedTotal = total.toFixed(2)


  if (amount <= 0) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>)
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total <span>${roundedTotal}</span></h4>
        </div>
        <button onClick={onClear} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer