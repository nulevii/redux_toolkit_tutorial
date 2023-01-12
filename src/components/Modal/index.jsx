import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../redux/features/modal/modalSlice'
import { clearCart } from '../../redux/features/cart/cartSlice'

function Modal() {
  const dispatch = useDispatch()

  const onConfirm = () => {
    dispatch(clearCart())
    dispatch(closeModal())
  }

  const onCancel = () => {
    dispatch(closeModal())
  }

  return (
    <aside className="modal-container">
      <div className='modal'>
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button onClick={onConfirm} type='button' className="btn confirm-btn">confirm</button>
          <button onClick={onCancel} type='button' className="btn clear-btn">cancel</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal