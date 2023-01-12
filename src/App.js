import Navbar from './components/Navbar/index.jsx';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from './redux/features/cart/cartSlice.js';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector(store => store.modal)
  const { isLoading } = useSelector(store => store.cart)

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>)
}
export default App;
