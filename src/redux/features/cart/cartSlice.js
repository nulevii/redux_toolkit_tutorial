import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'https://course-api.com/react-useReducer-cart-project'
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCatItems', async (_, thunkAPI) => {
  try {
    const resp = await axios.get(url)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
    },
    increaseItem: (state, action) => {
      const cartItem = state.cartItems.find(item => item.id === action.payload)
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItem: (state, action) => {
      const cartItem = state.cartItems.find(item => item.id === action.payload)
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.amount
        total += (Number(item.price) * item.amount)
      })
      state.amount = amount
      state.total = total
    }
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action.payload)
    }
  }
})


export default cartSlice.reducer
export const { clearCart, removeItem, increaseItem, decreaseItem, calculateTotals } = cartSlice.actions
