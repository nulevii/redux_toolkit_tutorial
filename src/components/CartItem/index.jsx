import React from 'react'
import { useDispatch } from 'react-redux'

import { ChevronDown, ChevronUp } from '../../icons'
import { removeItem, increaseItem, decreaseItem } from '../../redux/features/cart/cartSlice'

function CartItem({ id, img, title, price, amount }) {
  const dispatch = useDispatch()
  const onRemove = (id) => {
    return () => {
      dispatch(removeItem(id))
    }
  }

  const onIncrease = (id) => {
    return () => {
      dispatch(increaseItem(id))
    }
  }
  const onDecrease = (id) => {
    if (amount === 1) {
      return () => { dispatch(removeItem(id)) }
    }
    return () => { dispatch(decreaseItem(id)) }
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={onRemove(id)} className="remove-btn">remove</button>
      </div>
      <div>
        <button onClick={onIncrease(id)} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={onDecrease(id)} className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem